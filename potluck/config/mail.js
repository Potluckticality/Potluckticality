var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'Gmail',
    host: "smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_EMAIL_PS
    }
});


module.exports =  transporter

