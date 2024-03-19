const User = {
  _email: "example@mail.com",
  _password: "examplePassword",

  get email() {
    return this._email.toLocaleUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

console.log(User);
const beater = Object.create(User);
console.log(beater.email);
