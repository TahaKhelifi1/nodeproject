// email-sender.js
var nodemailer = require('nodemailer');

// Create a transporter
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tahakhelifi7@gmail.com', 
        pass: 'azerty2004' 
    }
});

var mailOptions = {
    from: 'tahakhelifi7@gmail.com',
    to: 'tahakhelifi8@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from a Node.js application!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
});
