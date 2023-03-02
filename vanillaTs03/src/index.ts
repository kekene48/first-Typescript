// class User {
//     email: string
//     name: string
//     //to add an optional field, use the code below
//     //private keyword allows an element to b only accessible within the class it is called
//     private city: string = 'Lagos'
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }


// ----------------Another way of declaring class----------------
class User {
    private _courseCount = 1
    readonly city: string = 'Lagos'
    constructor(
        public name: string,
        public email: string,
    ) {}
    private deleteToken() {
        console.log('Token deleted')
    }
    get getAppleId(): string {
        return `Apple${this.email}`
    }
    get courseCount(): number {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if(courseNum < this._courseCount) {
            throw new Error('course number should be larger than 1')
        } 
        this._courseCount = courseNum
    }
}


const user1 = new User('Kelvin', 'kelvin@gmail.com')
//now user1 can either have a city or not
//user1.city cannot be accessible outside of the User class
// user1.city
