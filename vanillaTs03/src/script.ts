// Protected keyword is the same as private except it is accessible in subclasses of the main class, it is still not usable outside of the classes


class Employee {
    private readonly city: string = 'Nnewi'
    protected _courseCount = 1
    constructor(
        public name: string,
        public email: string
    ) {}

    get appleId(): string {
        return `Apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error('course number must be more than 1')
        }
        this._courseCount = courseNum;
    }
}

class ContractEmployee extends Employee {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}