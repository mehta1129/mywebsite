import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API routes FIRST
  app.post("/api/submit-form", async (req, res) => {
    try {
      const { name, email, interest, message } = req.body;

      // Configure the SMTP transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.zoho.in",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || "mmehta@vijayglobal.ca",
          pass: process.env.SMTP_PASS || "BEsKkcakNLMD",
        },
      });

      // Setup email data
      const mailOptions = {
        from: process.env.SMTP_USER || "mmehta@vijayglobal.ca", // sender address
        to: "mmehta@vijayglobal.ca", // list of receivers
        replyTo: email,
        subject: `New Inquiry from ${name} - Vijay Global`,
        text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`,
      };

      // Send mail
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
    
    // SPA fallback
    app.get("*", (req, res) => {
      res.sendFile(process.cwd() + "/dist/index.html");
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
