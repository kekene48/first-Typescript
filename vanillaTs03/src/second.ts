interface TakePhoto {
    cameraMode: string
    filter: string
    burst: string
}

interface Story {
    createStory(): string
}

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ) {}

    createStory(): string {
        return 'story created'
    }
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ) {}
}