import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, program, message } = body;

    // Basic validation
    if (!name || !email || !message || !program) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Log the submission (for now). 
    // TODO: Connect real email or CRM (e.g. Resend, Nodemailer with Hostinger SMTP, Formspree, etc.)
    console.log('=== NEW STUDY2PASSPORT CONSULTATION INQUIRY ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Program Interest:', program);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('================================================');

    // Simulate processing delay in dev if wanted
    // await new Promise(resolve => setTimeout(resolve, 400));

    // In production you would:
    // - Send email via Resend / SendGrid / Hostinger mail
    // - Save to database / Google Sheet / Airtable
    // - Trigger CRM notification

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your consultation request has been received. We'll get back to you within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly at info@study2passport.com.' },
      { status: 500 }
    );
  }
}
