const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());


let HTML_VIEW = `<div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #1a1e21; color: #e2e8f0; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #2d3748;">
  
  <!-- Header with Light Green Accent -->
  <div style="border-bottom: 2px solid #4ade80; padding-bottom: 15px; margin-bottom: 25px;">
    <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">
      ⚡ Flash<span style="color: #4ade80;">dev</span> Portfolio Connection
    </h2>
    <p style="color: #a0aec0; margin: 5px 0 0 0; font-size: 14px;">A recruiter has submitted a message via your contact form.</p>
  </div>

  <!-- Content Section (Light Dark Box) -->
  <div style="background-color: #2d3748; padding: 20px; border-radius: 6px; border-left: 4px solid #4ade80; margin-bottom: 25px;">
    
    <!-- Sender Email -->
    <div style="margin-bottom: 15px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Sender Email</strong>
      <div style="background-color: #ebf4ff; color: #1a202c; padding: 10px 12px; border-radius: 4px; font-size: 15px; font-weight: 500;">
        <a href="mailto:{{user_email}}" style="color: #1a202c; text-decoration: none;">{{user_email}}</a>
      </div>
    </div>

    <!-- Recruiter Role -->
    <div style="margin-bottom: 15px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Proposed Role / Message Hook</strong>
      <div style="background-color: #ebf4ff; color: #1a202c; padding: 10px 12px; border-radius: 4px; font-size: 15px; font-weight: 500;">
        {{user_role}}
      </div>
    </div>

    <!-- Message Content -->
    <div style="margin-bottom: 5px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Message Body</strong>
      <div style="color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #1a1e21; padding: 15px; border-radius: 4px; border: 1px solid #4a5568;">
        {{message}}
      </div>
    </div>

  </div>

  <!-- Action Button (Light Green UI element) -->
  <div style="text-align: center; margin-bottom: 20px;">
    <a href="mailto:{{user_email}}?subject=Regarding your message on my Portfolio" 
       style="background-color: #4ade80; color: #12151a; text-decoration: none; padding: 12px 28px; font-weight: bold; border-radius: 4px; display: inline-block; font-size: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      Reply Directly via Email ✉️
    </a>
  </div>

  <!-- Footer -->
  <div style="text-align: center; border-top: 1px solid #2d3748; padding-top: 15px; font-size: 12px; color: #718096;">
    Sent automatically via EmailJS from flash.dev
  </div>

</div>`

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
})

app.post("/send-msg", async (req, res) => {

    try {

        const { email, role, message } = req.body

        let emailData = await transport.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: "new message",
            html: `<div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #1a1e21; color: #e2e8f0; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #2d3748;">
  
  <!-- Header with Light Green Accent -->
  <div style="border-bottom: 2px solid #4ade80; padding-bottom: 15px; margin-bottom: 25px;">
    <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">
      ⚡ Flash<span style="color: #4ade80;">dev</span> Portfolio Connection
    </h2>
    <p style="color: #a0aec0; margin: 5px 0 0 0; font-size: 14px;">A recruiter has submitted a message via your contact form.</p>
  </div>

  <!-- Content Section (Light Dark Box) -->
  <div style="background-color: #2d3748; padding: 20px; border-radius: 6px; border-left: 4px solid #4ade80; margin-bottom: 25px;">
    
    <!-- Sender Email -->
    <div style="margin-bottom: 15px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Sender Email</strong>
      <div style="background-color: #ebf4ff; color: #1a202c; padding: 10px 12px; border-radius: 4px; font-size: 15px; font-weight: 500;">
        <a href="mailto:${{user_email}}" style="color: #1a202c; text-decoration: none;">${{user_email}}</a>
      </div>
    </div>

    <!-- Recruiter Role -->
    <div style="margin-bottom: 15px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Proposed Role / Message Hook</strong>
      <div style="background-color: #ebf4ff; color: #1a202c; padding: 10px 12px; border-radius: 4px; font-size: 15px; font-weight: 500;">
        ${{user_role}}
      </div>
    </div>

    <!-- Message Content -->
    <div style="margin-bottom: 5px;">
      <strong style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">Message Body</strong>
      <div style="color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #1a1e21; padding: 15px; border-radius: 4px; border: 1px solid #4a5568;">
        {{message}}
      </div>
    </div>

  </div>

  <!-- Action Button (Light Green UI element) -->
  <div style="text-align: center; margin-bottom: 20px;">
    <a href="mailto:${{user_email}}?subject=Regarding your message on my Portfolio" 
       style="background-color: #4ade80; color: #12151a; text-decoration: none; padding: 12px 28px; font-weight: bold; border-radius: 4px; display: inline-block; font-size: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      Reply Directly via Email ✉️
    </a>
  </div>

  <!-- Footer -->
  <div style="text-align: center; border-top: 1px solid #2d3748; padding-top: 15px; font-size: 12px; color: #718096;">
    Sent automatically via EmailJS from flash.dev
  </div>

</div>`
        })

        res.json({
            data: emailData,
            success: true,
            message: "Email sent successfully",
        });


    } catch (err) {
        res.json({
            message: "Some thing went wrong"
        })
    }
})


app.listen(process.env.PORt, () => {
    console.log("Server is running..")
})
