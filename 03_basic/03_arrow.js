const user ={
    username: "khairul",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'janey'
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = 'khairul'
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = 'khairul'
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (
//     num1 + num2
//     )
    const addTwo = (num1, num2) => ({username: 'khairul'})

// console.log(addTwo(5, 2));


const myArray = [2, 5, 6, 7, 8]

// myArray.forEach()