"use strict";
class TakePhotograph {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
    // abstract getSepia(): void
    getReelTime() {
        //some complex calculations
        return 17;
    }
}
class Snapchat extends TakePhotograph {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia filter enabled');
    }
}
// const kk = new Snapchat('test', 'test2')
