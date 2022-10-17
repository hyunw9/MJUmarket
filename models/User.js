
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db/db.json");

const db = low(adapter);
class User {
  constructor(id, password) {
    this.number = db.user.length +1
    this.id = email;
    this.password = password;
    this.posts = []
  }

  static async create(
    const user = new User(id,password);

    await db.user?.push(user).write();
    
  )
}
