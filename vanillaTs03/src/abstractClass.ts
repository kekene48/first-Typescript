abstract class TakePhotograph {
    constructor(
        public camerMode: string,
        public filter: string
    ) {}

    // abstract getSepia(): void
    getReelTime(): number {
        //some complex calculations
        return 60000
    }
}
 
class Snapchat extends TakePhotograph {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('sepia filter enabled');
        
    }

}

const kk = new Snapchat('test', 'test2', 17)
kk.getReelTime()
