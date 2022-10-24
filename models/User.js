class User {
  constructor(id, password) {
    this.number = db.user.length + 1;
    this.id = email;
    this.password = password;
    this.posts = [];
  }

  static async create(id, password) {
    const user = new User(id, password);

    await db.user?.push(user).write();
  }
}
