// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'janeyrahman@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'khairul',
            lastname: 'islam'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: 'a', 2: 'b'}
const obj2 ={3: 'c', 4: 'c'}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2) // batter way to combine 
console.log(obj3);