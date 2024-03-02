function SetUsername(username) {
  // Complex DB calls
  this.username = "username";
  console.log("called");
  console.log("Use admin This not own");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const beater = new CreateUser("beater", "beater@gmail.com", 123456789);
console.log(beater);
