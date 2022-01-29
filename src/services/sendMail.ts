import * as nodemailer from 'nodemailer';
import AgendamentoInterface from '../schemas/typeAgendamento';

async function sendMail(data: AgendamentoInterface) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    let testAccount = {
        user: ' melronie.pt@gmail.com',
        pass: 'MelRonnier2022'
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'melronie.pt@gmail.com', // sender address
        to: String(data.email), // list of receivers
        subject: "MelRonnier - Novo Pedido", // Subject line
        text: "Pedido ID: "+data._id+". O seu pedido foi registado com sucesso. Data: "+(String(new Date())), // plain text body
        html: "Pedido ID: "+data._id+"<br><br><b>O seu pedido foi registado com sucesso.</b> Data: "+(String(new Date())), // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default sendMail;