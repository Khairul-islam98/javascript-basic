// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


const bigNum = 3484838347937493847535343n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', ' doga']

let myObj = {
    name: 'khairul',
    age: 24,
}

const myFunction = function(){
    console.log('hello world!');
}

// console.log(typeof bigNum)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = 'janey rahman'

let anotherName = myYoutubeName

anotherName = 'khairul islam'

// console.log(myYoutubeName);
// console.log(anotherName);

let user = {
    email: 'janeyrahman900@gmail.com',
    bkash: 'name@bkash'
}


let user2 = user
user2.email = 'khairul@gmail.com'
console.log(user.email);
console.log(user2.email);