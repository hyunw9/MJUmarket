import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { nextTick } from "process";
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db/db.json");

const db = low(adapter);
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
/*const mailAuth = async (req, res) => {
  console.log(authNum);
  //클라이언트에서 가능하다고 하면 개발
};*/
const register = async (req, res) => {
  let { username, email, pw, major } = req.body;

  let newUser = {
    id: 0, //자동생성 되어야함
    username: username,
    email: email,
    password: pw,
    major: major,
  };
  db.get("user").push(newUser).write();
  res.json(db.get("user").find({ email: email }).value());
};

export default {
  mail,
  register,
};
