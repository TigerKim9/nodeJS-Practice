const { info } = require('console');
const nodemailer = require('nodemailer');
const email = {
    "host" : "smtp.mailtrap.io",
    "port" : 2525,
    "secure": false,
    "auth" : {
        "user" : "kkm",
        "pass" : "456456"
    }

};
const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error,info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'snen@gmail.com',
    to : 'kkm9499@gmail.com',
    subject: "메일 보냅니다.",
    text: "node js 연습"
}

send(email_data);