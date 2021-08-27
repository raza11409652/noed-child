const nodemailer = require('nodemailer')

const mailer = async ({to, htmlMsg, plainMsg, subject}) => {
    const config = {
        user: "61e62b010420d7",
        pass:"99915c6710e869"
    }
    // console.log(config)
    // console.log(mailerConfig);
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth:config,
        ssl: false,
        tls: true,
    });
    htmlMsg+=`<hr/>
    <p style="font-size:10px">This is a system generated email don't reply to this mail.</p>`
   let info =  await transporter.sendMail({
        from: "noreply@battle-station.com",
        to: to,
        subject: subject,
        text: plainMsg,
        html: htmlMsg
    });
    console.log(info);
    return info
}

module.exports = {mailer}