let pid = 0;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db/db.json");

const db = low(adapter);
const get = async (req, res) => {

  console.log("넘어갔습니다");
  const paragraph = db.get("post").value();
  console.log(paragraph);
  res.json(paragraph);
}; //제발 되어라
const post = async (req, res) => {
  // 0 == yet, 1 == progress, 2 == done
  const { postTitle, postBody, id, price } = req.body;
  const { major, email, username } = db.get("user").find({ id: id }).value();
  console.log(db.get("user").find({ id: id }).value());
  let newPost = {
    id: pid,
    title: postTitle,
    price: price,
    major: major,
    username: username,
    paragraph: postBody,
    status: 0,
  };
  db.get("post").push(newPost).write();
  db.get("user").find({ id: id }).get("posts").push({ pid: pid }).write();

  res.json(db.get("post").find({ id: pid }).value());
  pid += 1;
};

export default {
  post,
  get,
};
