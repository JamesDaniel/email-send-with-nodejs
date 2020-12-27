const nodemailer = require("nodemailer");

(async function () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        pool: true,
        host: "smtp.gmail.com",
        port: 587,
        secure: true, // use TLS
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_SENDER_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: `"james daniel" <${process.env.EMAIL_FROM}>`, // sender address
        to: process.env.EMAIL_TO, // list of receivers
        subject: "Hello 2 ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}());
