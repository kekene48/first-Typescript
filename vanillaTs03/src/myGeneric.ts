//generic
const scores: Array<number> = [];
const names:Array<string> = [];


function identity1(val: number): number {
    return val
};

function identity2(val:any): any {
    return val
}

//difference btwn any and the generics is that val could be a number and a string or boolean or any other data type may be returned

function identity3<Type>(val: Type): Type {
    return val
}

identity3(true)

//shortcut to writing with type generics
function identity4<K>(val: K): K {
    return val;
}

//how to use generics in custom types
interface Phone {
    model: string,
    iud: number,
    length: string
}

identity4<Phone>({model: 'A9', iud: 17-9, length: '.6.5 Inches'})

/////////////////////////GENERICS WITH ARRAYS///////////////////////

function getSearchedProduct<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3;
    return products[myIndex]
}

// the same function above as an arrow function

const getMoresearchedProducts = <T,>(products: T[]): T => {
    //do some database opeartions
    const myIndex = 4;
    return products[myIndex]
}
//the <T,> as seen above is used to differentiate Generics from normal HTML tags, no errors would occur