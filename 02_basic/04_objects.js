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
const obj2 ={3: 'a', 4: 'b'}
const obj3 ={4: 'a', 5: 'b'}

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj3) // batter way to combine 
const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: 'js development',
    price: '999',
    courseInstructor: 'khairul islam'
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = 'khairul')

// {
//     'name': 'khairul islam',
//     'courseName': 'js in bangla',
//     'price': 'free'
// }
