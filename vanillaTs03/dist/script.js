"use strict";
// Protected keyword is the same as private except it is accessible in subclasses of the main class, it is still not usable outside of the classes
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = 'Nnewi';
        this._courseCount = 1;
    }
    get appleId() {
        return `Apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course number must be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class ContractEmployee extends Employee {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
