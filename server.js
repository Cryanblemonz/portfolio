import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import nodemailer from 'nodemailer'
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "public")));
dotenv.config({ path: path.join(__dirname, '.env')});


app.post("/send", (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.contactName}</li>
        <br>
        <li>Email: ${req.body.email}</li>
        <br>
        <li>Message: ${req.body.message}</li>
        </ul>
      `;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email, 
            pass: process.env.pw, 
        },
    });
    

    let mailOptions = {
        from: '<"Nodemailer Contact">', 
        to: process.env.email, 
        subject: "Node Contact Request", 
        text: `Name: ${req.body.contactName}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        html: output, 
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.sendStatus(200);
    });
});

const port = 3000;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function (req, res) {
    console.log("server is running on port 3000 ");
});
