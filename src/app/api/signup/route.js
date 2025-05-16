import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/models/User'

export async function POST(request) {
  try {
    // Connect to database
    await connectDB()

    // Get email and password from request body
    const { email, password } = await request.json()
    
    // Debug log (temporary)
    console.log('Received data:', { email, password })

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ 
        message: 'Email and password are required' 
      }, { status: 400 })
    }

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ 
        message: 'Email already registered' 
      }, { status: 400 })
    }

    // Validate password
    if (password.length < 6) {
      return NextResponse.json({ 
        message: 'Password must be at least 6 characters long' 
      }, { status: 400 })
    }

    // Create new user
    const user = await User.create({ 
      email, 
      password 
    })

    // Debug log (temporary)
    console.log('Created user:', user)

    return NextResponse.json({ 
      message: 'Account created successfully',
      user: { email: user.email },
      
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ 
      message: 'Error creating account: ' + error.message 
    }, { status: 500 })
  }
} 