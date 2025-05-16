import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Application from '@/models/Application';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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

    // Convert file to base64
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString('base64');
    const fileType = resume.type;
    
    // Upload to Cloudinary
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        `data:${fileType};base64,${base64File}`,
        {
          resource_type: 'auto',
          folder: 'resumes',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });

    // Save application to database
    const application = await Application.create({
      name,
      email,
      phone,
      skills,
      resumeUrl: uploadResponse.secure_url
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