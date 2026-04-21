import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, website } = body;

        // Honeypot: if "website" is filled, it's a bot — silently ignore
        if (website) {
            return NextResponse.json({ success: true });
        }

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Name, email, and message are required.",
                },
                { status: 400 },
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email address." },
                { status: 400 },
            );
        }

        // SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 1. Notification email → business inbox
        const notificationEmail = {
            from: `"Tradelinkers Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            replyTo: `"${name}" <${email}>`,
            subject: subject
                ? `New Contact: ${subject}`
                : `New contact form submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #c00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; background: #f7f7f7; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f7f7f7; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
                phone
                    ? `
            <tr>
              <td style="padding: 10px; background: #f7f7f7; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>`
                    : ""
            }
            ${
                subject
                    ? `
            <tr>
              <td style="padding: 10px; background: #f7f7f7; font-weight: bold;">Subject:</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>`
                    : ""
            }
            <tr>
              <td style="padding: 10px; background: #f7f7f7; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Sent from tlcbd.com contact form
          </p>
        </div>
      `,
        };

        // 2. Auto-reply → the person who submitted
        const autoReplyEmail = {
            from: `"Tradelinkers Engineering Ltd" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank you for contacting Tradelinkers Engineering Ltd",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Thank you, ${name}!</h2>
          <p>We have received your message and our team will get back to you within 1–2 business days.</p>
          <div style="background: #f7f7f7; padding: 15px; border-left: 4px solid #c00; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #555;">Your message:</p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br><strong>Tradelinkers Engineering Ltd</strong></p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #888;">
            This is an automated confirmation. Please do not reply directly to this email.
          </p>
        </div>
      `,
        };

        await Promise.all([
            transporter.sendMail(notificationEmail),
            transporter.sendMail(autoReplyEmail),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to send message. Please try again.",
            },
            { status: 500 },
        );
    }
}
