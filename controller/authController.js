import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { nextTick } from "process";
import { findvalue } from "../function/find";

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db/db.json");

const db = low(adapter);
let sid = 0;

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

const register = async (req, res) => {
  let { username, email, password, major } = req.body;

  let newUser = {
    id: sid,
    username: username,
    email: email,
    password: password,
    major: major,
    posts: [],
  };

  db.get("user").push(newUser).write();
  res.json(db.get("user").find({ id: sid }).value());
  sid += 1;
};

const login = async (req, res, next) => {
  let { email, password } = req.body;

  if (db.get("user").find({ email }).value().email == email) {
    if ((db.get("user").find({ email }).value().password = password)) {
      res.send("success");
    } else {
      res.send("pw failed");
    }
  } else {
    res.send("pw failed");
  }

  /*
  if (
    db.get("user").find({ email: email, password: password }).value()?.email ==
    undefined
  ) {
    res.json({
      status: "failed",
    });
  } else {
    next();
    /*res.json({
      status: "success",
    })
  }*/
};

export default {
  mail,
  register,
  login,
};
