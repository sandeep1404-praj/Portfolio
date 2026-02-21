"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  const EMAIL_USER = process.env["EMAIL_USER"];
  const EMAIL_PASS = process.env["EMAIL_PASS"];

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (!EMAIL_USER || !EMAIL_PASS) {
    if (!EMAIL_USER) console.error("Missing EMAIL_USER environment variable.");
    if (!EMAIL_PASS) console.error("Missing EMAIL_PASS environment variable.");
    return { success: false, error: "Server configuration error. Please try again later." };
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER, // Using the variable to avoid hardcoded secrets mismatch in Netlify scanner
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
