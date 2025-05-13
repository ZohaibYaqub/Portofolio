import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Application from '@/models/Application';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    await connectDB();

    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const skills = JSON.parse(data.get('skills'));
    const resume = data.get('resume');

    // Check if email already exists
    const existingEmail = await Application.findOne({ email });
    if (existingEmail) {
      return NextResponse.json({ 
        success: false,
        message: 'This email is already registered. Please use a different email.' 
      }, { status: 400 });
    }

    // Check if phone number already exists
    const existingPhone = await Application.findOne({ phone });
    if (existingPhone) {
      return NextResponse.json({ 
        success: false,
        message: 'This phone number is already registered. Please use a different number.' 
      }, { status: 400 });
    }

    if (!resume) {
      return NextResponse.json({ 
        success: false,
        message: 'Resume is required' 
      }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const filename = `${Date.now()}-${resume.name}`;
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

    // Save file
    await writeFile(filepath, buffer);

    // Save application to database
    const application = await Application.create({
      name,
      email,
      phone,
      skills,
      resumeUrl: `/uploads/${filename}`
    });

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully',
      application
    }, { status: 201 });

  } catch (error) {
    console.error('Application submission error:', error);
    
    // Check if error is due to duplicate key (email or phone)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json({ 
        success: false,
        message: `This ${field} is already registered. Please use a different ${field}.`
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: false,
      message: 'Error submitting application' 
    }, { status: 500 });
  }
} 