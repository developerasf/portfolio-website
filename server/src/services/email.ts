import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async (name: string, email: string, message: string, subject?: string) => {
  const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
  
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: subject ? `New Contact: ${subject}` : `New Contact from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1E293B;">New Contact Form Submission</h2>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message}
          </div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export default transporter;