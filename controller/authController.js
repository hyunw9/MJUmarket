import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

require("dotenv").config();

var appDir = path.dirname(require.main.filename);
const mail = async (req, res) => {
  let authNum = Math.random().toString().substr(2, 6);
  let emailTemplete;

  ejs.renderFile(
    appDir + "/template/authMail.ejs",
    { authCode: authNum },
    function (err, data) {
      if (err) {
        console.log(err);
      }
      emailTemplete = data;
    }
  );
  let transporter = nodemailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    port: 587,
    secureConnection: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  let mailOptions = await transporter.sendMail({
    from: "rkdgusdnr32@naver.com",
    to: req.body.mail,
    subject: "회원가입을 위한 인증번호를 입력해주세요.",
    html: emailTemplete,
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    console.log("Finish sending email");
    res.send(authNum);
    transporter.close();
  });
};
const register = async (req, res) => {};

export default {
  mail,
};
