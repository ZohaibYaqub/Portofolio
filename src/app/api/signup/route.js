import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/models/User'

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request) {
  try {
    // Connect to database
    await connectDB()

    // Get email and password from request body
    const body = await request.json()
    const { email, password } = body

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ 
        success: false,
        message: 'Email and password are required' 
      }, { status: 400 })
    }

    // Email format validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false,
        message: 'Please enter a valid email address' 
      }, { status: 400 })
    }

    // Password length validation
    if (password.length < 6) {
      return NextResponse.json({ 
        success: false,
        message: 'Password must be at least 6 characters long' 
      }, { status: 400 })
    }

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return NextResponse.json({ 
        success: false,
        message: 'Email already registered' 
      }, { status: 400 })
    }

    // Create new user
    const user = await User.create({ 
      email: email.toLowerCase(), 
      password 
    })

    return NextResponse.json({ 
      success: true,
      message: 'Account created successfully',
      user: { email: user.email }
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    
    // Check for MongoDB duplicate key error
    if (error.code === 11000) {
      return NextResponse.json({ 
        success: false,
        message: 'This email is already registered' 
      }, { status: 400 })
    }

    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message)
      return NextResponse.json({ 
        success: false,
        message: messages.join(', ') 
      }, { status: 400 })
    }

    return NextResponse.json({ 
      success: false,
      message: 'Error creating account. Please try again.' 
    }, { status: 500 })
  }
}