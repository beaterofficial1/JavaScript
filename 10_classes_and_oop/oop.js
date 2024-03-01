const user = {
  username: "beaterofficial",
  loggedIn: true,
  signIn: false,
  getUserDetails: function () {
    console.log("Got user details from Database");
    console.log(`UserName: ${this.username}`);
  },
};

// console.log(user);
// console.log(user.getUserDetails());

// const promiseOne = new Promise(); // This is a constructor function
const date = new Date(); // This is a constructor function

function User(username, password) {
  this.username = username;
  this.password = password;
  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };
}

const userOne = new User("userOne", 123456789);
const userTwo = new User("userTwo", 123456789);

// {New} Instance like blank Object new is a constructor function

console.log(userOne.constructor); // Refrensh of the constructor function
console.log(userTwo);
