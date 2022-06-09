const nodemailer = require('nodemailer');

module.exports = function sentEmail(data) {
    // Initiate connection
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: {
            secureProtocol: "TLSv1_method"
        }
    });

    var mailOptions = {
        from: 'melronieweb@gmail.com',
        to: data.email,
        subject: 'Bem-vindo (a) à Mel Ronie ❤️',
        html: '<h1>O Seu pedido foi registado ' + data.name + '! <br>' +
            ' </h1><p>Obrigado pela escolha, volte sempre!</p>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}