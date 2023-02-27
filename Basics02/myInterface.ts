interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrial: () => string
    getCoupon(couponName: string) : number
    // startTrial(): string this is another way of defining methods in interface
}

const kelvin: User = {
    dbId: 17,
    email: 'k@k.com',
    userId: 1706,
    startTrial(): string {
        return 'kelvin has started free trial'
    },
    getCoupon: () => {
        return 10;
    } 
}

kelvin.email = 'k@k.com';
// kelvin.dbId = 71  dbId cannot be assigned because it is a readonly value