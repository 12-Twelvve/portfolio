import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(){
    return NextResponse.json({
        hello:"sunshine", 
    });
}

// send email post request.
export async function POST(request){
    const data = await request.json()
    const { name, email, message } = data;
    // console.log(name, email, message)
    try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Provide your SMTP settings here
        host: 'smtp.example.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'your_smtp_username',
          pass: 'your_smtp_password',
        },
      });
    // Send email
    await transporter.sendMail({
        from: 'your_email@example.com',
        to: 'koobear99@gmail.com',
        subject: 'New message from My website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Log success message
    console.log('Email sent successfully.');
    // Send a response to the client
    return NextResponse.json({
        message: 'Email sent successfully!' 
        });
    } catch (error) {
        // Log error
        console.error('Error sending email:', error);
        // Send an error response to the client
        return NextResponse.json({
            error: 'Server failed to send email.'
            });
    }
}