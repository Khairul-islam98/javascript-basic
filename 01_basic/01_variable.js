const accountId =  12435;
let accountEmail = 'khairul@gmail.com';
var accountPassword = '12345';
accountCity = 'Noakhali';

// accountId = 2 // not allowed 

accountEmail = 'janeyrahman@gmail.com';
accountPassword = '11111111';
accountCity =  'feni';
let accountState;

console.log(accountEmail);

/*
    Prefer not to use var
    because or issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])