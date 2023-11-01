//. singleton
//  Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: 'khairul',
    'full name': 'khairul islam',
    [mySym]: "mykey1",
    age: 24,
    location: 'noakhali',
    email: 'khairul@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

    // console.log(jsUser.email);
    // console.log(jsUser["email"]);
    // console.log(jsUser["full name"]);
    // console.log(jsUser[mySym]);

    jsUser.email = 'janeyrahman@gmail.com'
    // Object.freeze(jsUser)
    jsUser.email = 'tanvir@gmail.com'
    // console.log(jsUser);

    jsUser.greeting = function(){
        console.log('hello js');
    }
    jsUser.greeting2 = function(){
        console.log(`hello js, ${this.name}`);
    }
    console.log(jsUser.greeting());
    console.log(jsUser.greeting2());