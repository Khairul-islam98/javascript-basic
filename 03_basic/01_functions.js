
function sayMyName(){
    console.log('k');
    console.log('h');
    console.log('a');
    console.log('i');
    console.log('r');
    console.log('u');
    console.log('l');
}


// sayMyName()

                        //parameter
// function addTwoNum(num1, num2) {

//     console.log(num1 + num2);
// }
          // arguments
// addTwoNum(3, 5)
function addTwoNum(num1, num2) {
    // let result = num1 + num2;
    // return result
    return num1 + num2
}
  
const result = addTwoNum(3,5)
// console.log("result: ", result);

function loginUserMessage(username = 'janey'){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('khairul islam'));
// console.log(loginUserMessage());
                                //rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000 ));

const user ={
    username: "khairul",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: 'janey',
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));