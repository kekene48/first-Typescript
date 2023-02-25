// const User = {
//     name: 'Kelvin',
//     email: 'kelvin@gb.com',
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: 'nash', isPaid: false, email: 'n@namespace.com'}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: 'reactjs', price: 17}
// }

//creatng your own type called type aliases
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: '', email: '', isActive: true}
// }


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number
}

let myUser: User = {
    _id: '12345',
    name: 'k',
    email: 'k@k.com',
    isActive: false,
}

myUser.email = 'k@gmail.com';
// myUser._id = '2455' cannot assign value of _id because read only in declared in type alias

export {}