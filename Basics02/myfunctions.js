"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var LogInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
var newNum = addTwo(5);
getUpper('Kelvin');
signUpUser('Ekene', 'Email@email.com', false);
LogInUser('k', 'k@k.com');
// function getVal(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return '200 OK'
// }
var getHello = function (s) {
    return '';
};
var heroes = ['superman', 'wonder woman', 'batman'];
// const heroes = [1, 2, 3]
heroes.map(function (hero) {
    return "the hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
