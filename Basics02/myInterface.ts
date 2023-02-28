interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrial: () => string
    getCoupon(couponName: string, value: number) : number
    // startTrial(): string this is another way of defining methods in interface
}


//interfaces are extendable, which means more values cane be added to them unlike type
// the above is called 'reopenng of the interface'
interface User {
    githubToken: string
}

//interface also supports inheritance
interface Admin extends User {
    role: 'Teacher' | 'Teaching-Assistant' | 'HOD'
}

const kelvin: User = {
    dbId: 17,
    githubToken: 'kelvin@github.com',
    email: 'k@k.com',
    userId: 1706,
    startTrial(): string {
        return 'kelvin has started free trial'
    },
    getCoupon: (couponName: 'files', off: 10) => {
        return 10;
    } 
    //the interface method parameters, dont have to have the same names, like 'value' and 'off' from above
}

//this is the profile of an admin hat inherits the components of 'User' and adds the 'role' component 
const ekene: Admin = {
    dbId : 6777,
    githubToken: 'kene@github.com',
    email: 'e@e.com',
    userId: 66523,
    startTrial(): string {
        return 'ekene has started free trial'
    },
    getCoupon(name: 'ekene17', off: 10): number {
        return 10
    },
    role: 'Teacher'
}

kelvin.email = 'k@k.com';
// kelvin.dbId = 71  dbId cannot be assigned because it is a readonly value