function detectType(val: number | string) {
    if(typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3;
}

//typeof keyword is also called a type guard

function provideId(id: string | null) {
    if(!id) {
        console.log('provide an ID')
        return
    }
    id.toLowerCase()
}

//the in operator
interface User {
    name: string
    email: string
}

interface Admin extends User {
    isAdmin: boolean
}

function isAdminAcount(account: User | Admin) {
    if('isAdmin' in account) {
        return account.isAdmin;
    }
    return typeof !!'';
}


//instanceof narrowing
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

//type predicates
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet;
        return 'fish feed needed'
    } else {
        pet;
        return 'bird feed needed'
    }
}

//discriminated unions
interface Circle {
    kind: 'circle'
    radius: number
}
interface Square {
    kind: 'square'
    side: number
}
interface Rectangle {
    kind: 'rectangle'
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getShape(shape: Shape) {
    if(shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    } else {
        // return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        
            case 'square':
                return shape.side * shape.side

            case 'rectangle':
                return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape;
    }
}