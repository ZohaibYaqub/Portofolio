import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ 
        success: false,
        message: 'User not found. Please sign up first.' 
      }, { status: 404 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ 
        success: false,
        message: 'Invalid password. Please try again.' 
      }, { status: 400 });
    }

    // Password matches
    return NextResponse.json({ 
      success: true,
      message: 'Login successful',
      user: {
        email: user.email,
        id: user._id
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Error logging in' 
    }, { status: 500 });
  }
} 