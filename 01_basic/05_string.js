const name = 'janey'
const repoCount = 17
// console.log(name + repoCount + ' Value');
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('khairul-fc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
const newString2 = gameName.slice(-8,4)
// console.log(newString);
// console.log(newString2);

const newStringOne = '   Khairul   '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://janeyrahman.com/janey%20rahman'
console.log(url.replace('%20', '-'))

console.log(url.includes('janeyff'))

console.log(gameName.split("-"));
console.log(gameName.join(' '));