const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

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
            html: `<h1>hello ${email}</h1> <p><b>Role:</b></p>
                <p> Role :  ${role}</p>, <p> Message :  ${message}</p>`
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
