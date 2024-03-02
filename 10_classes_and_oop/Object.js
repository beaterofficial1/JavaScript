const addTwo = function (num) {
  this.num = num + 2;
};

const test = new addTwo(5);

console.log(test);
