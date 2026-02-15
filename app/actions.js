"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email configuration in environment variables.");
    return { success: false, error: "Server configuration error. Please try again later." };
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contactwebsandeep@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #69d867ff;">New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio contact form. Here are the details:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
