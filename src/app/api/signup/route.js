import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/models/User'

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request) {
  try {
    console.log('Starting signup process...')
    
    // Connect to database
    console.log('Connecting to database...')
    await connectDB()
    console.log('Database connected successfully')

    // Get email and password from request body
    const body = await request.json()
    const { email, password } = body
    console.log('Received signup data for email:', email)

    // Validate input
    if (!email || !password) {
      console.log('Missing email or password')
      return NextResponse.json({ 
        message: 'Email and password are required' 
      }, { status: 400 })
    }

    // Check if user exists
    console.log('Checking if user exists...')
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      console.log('User already exists')
      return NextResponse.json({ 
        message: 'Email already registered' 
      }, { status: 400 })
    }

    // Create new user
    console.log('Creating new user...')
    try {
      const user = await User.create({ 
        email, 
        password 
      })
      console.log('User created successfully:', user.email)

      return NextResponse.json({ 
        message: 'Account created successfully',
        user: { email: user.email }
      }, { status: 201 })
    } catch (createError) {
      console.error('Error creating user:', createError)
      return NextResponse.json({ 
        message: 'Error creating account: ' + createError.message,
        details: createError.toString()
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Signup process error:', error)
    return NextResponse.json({ 
      message: 'Error in signup process',
      error: error.message,
      stack: error.stack
    }, { status: 500 })
  }
}