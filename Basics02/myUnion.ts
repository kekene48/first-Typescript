//union types allows you to accept a set amount of data types

let score: number | string = 33;

score = 44;
score = '55'

// using union types in type aliases

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let user1: User | Admin = {name: 'kelvin', id: 1756}
user1 = {username: 'kk', id: 1756}

// using union type in function
// function getDbId(id: number | string) {
//     console.log(`The Db Id is ${id}`)
// }

getDbId(3)
getDbId('3')

function getDbId(id: number | string) {
    if(typeof id === 'string') {
        id.toLowerCase()
    } else if(typeof id === 'number') {
        id.toLocaleString()
    }
}

//union type in array
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number)[] = ['1', 2, '3']

//literal type assignment 
let pi: 3.14 = 3.14;
// pi = 3.145 wouldn't work because here, pi can only be 3.14
let seatAllotment: 'Aisle' | "Middle" | "Window"
// seatAllotment = 'Aisle' will work
// seatAllotment = 'Crew' will not work