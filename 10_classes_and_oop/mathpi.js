const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const discordUser = {
  username: "beaterofficial01",
  prefix: "+",
  isActive: true,
  commands: function () {
    console.log("Testing");
  },
};

Object.defineProperty(discordUser, "username", {
  //   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(discordUser, "username"));

for (let [key, value] of Object.entries(discordUser)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
