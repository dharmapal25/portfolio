const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.json());

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

    let emailData = transport.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "new message",
      html:
        `    <section style="max-width: 550px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 6px;">

        <h2
            style="margin-top: 0; margin-bottom: 24px; font-size: 20px; font-weight: 600; color: #111111; border-bottom: 1px solid #eeeeee; padding-bottom: 12px;">
            New Submission Details
        </h2>

        <div style="margin-bottom: 20px;">
            <span
                style="display: block; font-size: 12px; text-transform: uppercase; color: #777777; font-weight: bold; margin-bottom: 4px;">Email</span>
            <a href="mailto:${email}" style="font-size: 15px; color: #0066cc; text-decoration: none;">${email}</a>
        </div>

        <div style="margin-bottom: 20px;">
            <span
                style="display: block; font-size: 12px; text-transform: uppercase; color: #777777; font-weight: bold; margin-bottom: 4px;">Role</span>
            <p style="margin: 0; font-size: 15px; color: #222222;">${role}</p> 
        </div>

        <div style="margin-bottom: 10px;">
            <span
                style="display: block; font-size: 12px; text-transform: uppercase; color: #777777; font-weight: bold; margin-bottom: 6px;">Message</span>
            <p style="margin: 0; font-size: 15px; color: #444444; background-color: #f9f9f9; padding: 12px; border-radius: 4px; border-left: 3px solid #dddddd; white-space: pre-wrap;">${message}</p> 
        </div>

    </section>

  <div style="text-align: center; margin-bottom: 20px;">
    <a href="mailto:${email}?subject=Regarding your message on my Portfolio" 
       style="background-color: #4ade80; color: #12151a; text-decoration: none; padding: 12px 28px; font-weight: bold; border-radius: 4px; display: inline-block; font-size: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      Reply Directly via Email ✉️
    </a>
  </div>`
    })
    console.log(emailData)

    res.json({
      data: emailData,
      success: true,
      message: "Email sent successfully",
    });


  } catch (err) {
    res.json({
      message: "Some thing went wrong",
      error: err
    })
  }
})


app.listen(process.env.PORT, () => {
  console.log("Server is running..")
})
