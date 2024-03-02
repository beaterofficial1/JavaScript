let myName = "beater    ";
let a = 1;

myHeros = ["thor", "ironman"];

let heroPower = {
  thor: "Hammer",
  spiderMan: "spidy",
  spidyPower: function () {
    console.log(`Spider man power is ${this.spiderMan}`);
  },
};

Object.prototype.beater = function () {
  console.log("Beater is present in all Object");
};

Array.prototype.sayHello = function () {
  console.log("Beater says hello");
};

// Inheritence

const User = {
  name: "beater",
  email: "beater@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvaliable: true,
};

const TASupport = {
  makeAssignment: "JavaScript",
  fullTime: true,
  __proto__: TeachingSupport, //Access Properties of Teaching Support
};

// Old syntax
Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// console.log(TeachingSupport.makeVideo);

const anotherUsername = "beater          ";
String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True lenght: ${this.trim().length}`);
};
anotherUsername.trueLength();

// "beater    ".trueLength();
