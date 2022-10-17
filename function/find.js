const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db/db.json");

const db = low(adapter);

const findvalue = async (id, pw) => {
  const result = db
    .get("user")
    .find({ sites, email: id, password: pw })
    .value().email;
  console.log(result, id, pw);
  return result;
};
export default {
  findvalue,
};
