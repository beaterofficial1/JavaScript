function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperties(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
}

const beater = new User("beaterofficial@gmail.com", "123456789");
console.log(beater.email);
