import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/models/User'

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request) {
  try {
    // Enable CORS
    const origin = request.headers.get('origin')
    
    // Connect to database
    await connectDB()

    // Get email and password from request body
    const { email, password } = await request.json()
    
    // Debug log (temporary)
    console.log('Received signup request')

    // Validate input
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: 'Email and password are required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: 'Email already registered' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    // Create new user
    const user = await User.create({ 
      email, 
      password 
    })

    return new NextResponse(
      JSON.stringify({
        message: 'Account created successfully',
        user: { email: user.email }
      }),
      { 
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )

  } catch (error) {
    console.error('Signup error:', error)
    return new NextResponse(
      JSON.stringify({ message: 'Error creating account: ' + error.message }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )
  }
}