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
        html: '<h1>O Seu pedido foi registado ' + data.name + '! <br>'
            +'<br>'
            +'<h3>Detalhe do pedido</h3>'
            +'<table>'
            +'<thead>'
            +'<tr>'
            +'<th>Requerente</th>'
            +'<th>Email</th>'
            +'<th>Telemóvel</th>'
            +'<th>Quantidade de Pessoas</th>'
            +'<th>Data de Entrada</th>'
            +'</tr>'
            +'</thead>'
            +'<tbody>'
            +'<tr>'
            +'<td>'+data.name+'</td>'
            +'<td>'+data.email+'</td>'
            +'<td>'+data.phone+'</td>'
            +'<td>'+data.people+'</td>'
            +'<td>'+data.date+' '+date.time+'</td>'
            +'</tr>'
            +'</tbody>'
            +'</table>'
            +'<br>'
            +' </h1><p>Obrigado pela escolha, volte sempre!</p>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}