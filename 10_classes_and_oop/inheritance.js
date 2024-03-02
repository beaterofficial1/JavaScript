class User {
  constructor(username) {
    this.username = username;
    this.test = "test";
  }

  logMe() {
    console.log(`UserName: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCource() {
    return `A new course was added by ${this.username}`;
  }
}

const testUser = new Teacher("Beater", "beaterofficial@mail.com", 12121212);

console.log(testUser.addCource());

console.log(testUser instanceof User);
