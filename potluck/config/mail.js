var nodemailer = require('nodemailer');
<<<<<<< HEAD

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

=======
var xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: 'arkauffma@gmail.com',
        clientId: '869653999569-nls65o1nfhrkgn4406ft17rb71rg6fq7.apps.googleusercontent.com',
        clientSecret: 'yBvQ8qPQUnPt4M7g3fuhag3p',
        refreshToken: ''
      })
    }
});

var mailOptions = {
  from: 'Alex <arkauffma@gmail.com>',
  to: '1johnmichael.solis@gmail.com',
  subject: 'Nodemailer test',
  text: 'Yo playa'
}

transporter.sendMail(mailOptions, function(err) {
  if (err) {
    console.log("ERror");
  } else {
    console.log('Email');
  }
});
>>>>>>> 4d7df8d025910e6aaf0c62ba56bd6c6455d8dfa1
