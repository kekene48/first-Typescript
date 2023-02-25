let user: (string | number)[] = [1, 'kk']

//the array elements have a predetermined format
let tupleUser: [string, number, boolean] = ['a', 1, false]
// let tupleUser: [string, number, boolean] = [false, 'a', 1] wouldn't work

let rgb: [number, number, number] = [255, 123, 177]

//usng tuple in type alias
type User = [number, string];

const user1: User = [2, '66']
// let user2: User = ['66', 2] wouldnt work


//issue ---- const variable can be changed
user1[1] = 'mickey'

//issue ---- arraymethods like pop, puh, slice, unshift can work on tuples, which goes against the idewa of tuples
