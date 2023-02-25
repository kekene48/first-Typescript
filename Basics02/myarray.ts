const superHeroes: string [] = []
// const powerRating: number[] = []
// another way of defining arrays in typescript is as seen below

const powerRating: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

//making an array of arrays
const MLModels: number[][] =[
    [255,255,255],
    []
]

const allUsers: User[] = []

superHeroes.push('superman')
powerRating.push(2)
allUsers.push({name: '', isActive: true})

// export {}