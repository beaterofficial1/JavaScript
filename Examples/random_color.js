function generateRandomHexCode() {
    let randomNum = Math.floor(Math.random() * 16777215);
    let hexCode = randomNum.toString(16).padStart(6, '0');
    return '#' + hexCode;
}

console.log(generateRandomHexCode());