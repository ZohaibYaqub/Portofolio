import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/models/User'

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}

export async function POST(request) {
  try {
    // Connect to database
    await connectDB()

    // Get email and password from request body
    const { email, password } = await request.json()
    
    // Debug log (temporary)
    console.log('Received data:', { email, password })
    console.log('MONGODB_URI:', process.env.MONGODB_URI);


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
      
    }, { 
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })

  } catch (error) {
    console.error('Signup error details:', {
      message: error.message,
      stack: error.stack,
      mongoUriExists: !!process.env.MONGODB_URI
    })
    return NextResponse.json({ 
      message: 'Error creating account: ' + error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 })
  }
}
