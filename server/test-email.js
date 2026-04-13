require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

console.log("Testing SMTP connection for:", process.env.SMTP_USER);
console.log("SMTP Pass starts with:", process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0,2) + "***" : "missing");

transporter.verify(function (error, success) {
  if (error) {
    console.log("CRITICAL ERROR: Connection to SMTP failed.");
    console.log(error);
  } else {
    console.log("SUCCESS! Server is ready to take our messages");
    
    // Test sending an actual email
    transporter.sendMail({
      from: `"Portfolio Test" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: "Test from Server",
      text: "This is a test message to see if SMTP actually works.",
    }).then(info => {
       console.log("Email sent successfully: " + info.messageId);
    }).catch(err => {
       console.log("CRITICAL ERROR: Sending failed despite connection working:", err);
    });
  }
});
