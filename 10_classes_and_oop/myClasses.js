// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const beater = new User(
  "beaterofficial",
  "beaterofficial@gmail.com",
  123456789
);

// console.log(beater);
// console.log(beater.encryptPassword());
// console.log(beater.changeUsername());
// Behind the scene

function userTwo(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  return this;
}

userTwo.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const test = new userTwo("user", "email@google.com", 111111111);
console.log(test.encryptPassword());
