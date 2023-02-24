function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let LogInUser = (name: string, email: string, isPaid: boolean = true) => {}

let newNum = addTwo(5)
getUpper('Kelvin')
signUpUser('Ekene', 'Email@email.com', false)
LogInUser('k', 'k@k.com')

// function getVal(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return '200 OK'
// }

let getHello = (s:string): string => {
    return ''
}

const heroes = ['superman', 'wonder woman', 'batman']
// const heroes = [1, 2, 3]

heroes.map(hero => {
    return `the hero is ${hero}`
})

function consoleError(errmsg):void {
    console.log(errmsg)
}

function handleError(errmsg):never {
    throw new Error(errmsg)
}

export {}