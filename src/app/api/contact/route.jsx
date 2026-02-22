
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, 
      subject: `New Message From: ${name}`, 
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `, 
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
          <div style="background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2563eb; font-size: 24px; font-weight: 600; margin-bottom: 20px; text-align: center;">
              New Message Received
            </h2>
            <div style="border-top: 2px solid #e5e7eb; padding-top: 20px;">
              <p style="font-size: 16px; color: #374151; margin-bottom: 10px;">
                <strong style="color: #2563eb;">Name:</strong> ${name}
              </p>
              <p style="font-size: 16px; color: #374151; margin-bottom: 10px;">
                <strong style="color: #2563eb;">Email:</strong> ${email}
              </p>
              <div style="margin-top: 20px;">
                <p style="font-size: 16px; color: #2563eb; font-weight: 600; margin-bottom: 10px;">
                  Message:
                </p>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <p style="font-size: 16px; color: #374151; white-space: pre-wrap; margin: 0;">
                    ${message}
                  </p>
                </div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #6b7280;">
              <p>This email was sent from your website's contact form.</p>
            </div>
          </div>
        </div>
      `, 
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message", error: error.message },
      { status: 500 }

    );
  }
}