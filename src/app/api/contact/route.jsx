
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
        style="margin:0; padding:0; background-color:#0f0f13; font-family:'Georgia', serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f13; padding: 48px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td style="
              background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
              border-radius: 16px 16px 0 0;
              padding: 40px 40px 32px;
              text-align: center;
              border-bottom: 1px solid rgba(255,255,255,0.06);
            ">
              <div style="
                display: inline-block;
                background: rgba(99, 179, 237, 0.12);
                border: 1px solid rgba(99, 179, 237, 0.25);
                border-radius: 50px;
                padding: 6px 18px;
                margin-bottom: 20px;
              ">
                <span style="color: #90cdf4; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-family: 'Arial', sans-serif; font-weight: 600;">
                  Contact Form
                </span>
              </div>
              <h1 style="
                margin: 0;
                font-size: 28px;
                font-weight: 400;
                color: #f7fafc;
                letter-spacing: -0.5px;
                line-height: 1.2;
              ">
                New Message Received
              </h1>
              <p style="margin: 12px 0 0; color: #718096; font-size: 14px; font-family: 'Arial', sans-serif;">
                Someone reached out through your website
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background: #16161d; padding: 36px 40px;">

              <!-- Sender Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: #1e1e2e;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.06);
                margin-bottom: 24px;
              ">
                <tr>
                  <td style="padding: 24px 28px 20px;">
                    <p style="margin:0 0 6px; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #4a5568; font-family: 'Arial', sans-serif; font-weight: 700;">From</p>
                    <p style="margin: 0; font-size: 20px; color: #e2e8f0; font-weight: 400;">Jane Doe</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 28px 24px; border-top: 1px solid rgba(255,255,255,0.04);">
                    <p style="margin:0 0 6px; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #4a5568; font-family: 'Arial', sans-serif; font-weight: 700;">Email Address</p>
                    <a href="mailto:jane@example.com" style="color: #63b3ed; font-size: 15px; text-decoration: none; font-family: 'Arial', sans-serif;">jane@example.com</a>
                  </td>
                </tr>
              </table>

              <!-- Message Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: #1e1e2e;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.06);
              ">
                <tr>
                  <td style="padding: 18px 28px 14px; border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <p style="margin:0; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #4a5568; font-family: 'Arial', sans-serif; font-weight: 700;">Message</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 28px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #cbd5e0; font-family: 'Georgia', serif;">
                      Hi there! I came across your portfolio and I'm really impressed with your work. I'd love to discuss a potential collaboration on an upcoming project. Would you be available for a quick call sometime next week?
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:jane@example.com" style="
                      display: inline-block;
                      background: linear-gradient(135deg, #2b6cb0, #3182ce);
                      color: #ffffff;
                      text-decoration: none;
                      padding: 14px 36px;
                      border-radius: 8px;
                      font-size: 14px;
                      font-family: 'Arial', sans-serif;
                      font-weight: 600;
                      letter-spacing: 0.5px;
                    ">
                      Reply to Jane
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background: #111118;
              border-radius: 0 0 16px 16px;
              padding: 24px 40px;
              text-align: center;
              border-top: 1px solid rgba(255,255,255,0.04);
            ">
              <p style="margin: 0; font-size: 12px; color: #2d3748; font-family: 'Arial', sans-serif;">
                Sent automatically from your website's contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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