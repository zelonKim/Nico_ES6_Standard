/*
const friends = [1, 2, 3, 4];

console.log(friends) // [1, 2, 3, 4]
*/

/*
const friends = [1, 2, 3, 4];

console.log(...friends)  //  1 2 3 4
*/

/*
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log([friends, family]) // [Array(4), Array(3)]
*/

/*
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log([...friends, ...family]) // [1, 2, 3, 4, 'a', 'b', 'c']
*/

/*
const person = {
    name: "seongjin",
    age: 28
};

const intro = {
    hobby: "piano",
    favorite: "coffe",
    character: "nice"
}

console.log({person, intro}) // {person: {…}, intro: {…}}
*/

/*
const person = {
    name: "seongjin",
    age: 28
};

const intro = {
    hobby: "piano",
    favorite: "coffee",
    character: "nice"
}

console.log({...person, ...intro}) // {name: 'seongjin', age: 28, hobby: 'piano', favorite: 'coffee', character: 'nice'} 
*/

/*
const friends = ['nico', 'lynn']

const newFriends = [...friends, 'dal'];

console.log(newFriends); // ['nico', 'lynn', 'dal']
*/

/*
const friends = ['nico', 'lynn']

const newFriends = ['dal', ...friends];

console.log(newFriends); // ['dal', 'nico', 'lynn']
*/

/*
const weekDay = ['mon','tue','wed']
const weekEnd = ['sat','sun']

console.log([...weekDay,'thu','fri',...weekEnd]) // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
*/

/*
const auth = {
    username: "seongjin",
    email: "ksz@naver.com"
};

console.log({ ...auth, password: 1234 }); // {username: 'seongjin', email: 'ksz@naver.com', password: 1234}
*/

/*
const auth = {
    username: "seongjin",
    email: "ksz@naver.com"
};

console.log({ password: 1234, ...auth, }); // {password: 1234, username: 'seongjin', email: 'ksz@naver.com'}
*/

/*
const lastName = prompt("what is your Last name?") // 입력: (empty)

const user = {
    username: "nico",
    age: 21
}

console.log(typeof lastName) // 출력: string
*/

/*
const lastName = prompt("what is your Last name?") // 입력: (empty)

const user = {
    username: "nico",
    age: 21,
    lastName: lastName
}   


console.log(user) // 출력: {username: 'nico', age: 21, lastName: ''}
*/


/*
const lastName = prompt("what is your Last name?") // 입력: (empty)

const user = {
    username: "nico",
    age: 21,
    lastName: lastName !== "" ? lastNmae : undefined
}   
console.log(user) // 출력: {username: 'nico', age: 21, lastName: undefined}
*/

/*
const lastName = prompt("what is your Last name?") // 입력: (empty)

const user = {
    username: "nico",
    age: 21,
    ...(lastName !== "" && {lastName})
};   
console.log(user) // 출력: {username: 'nico', age: 21}
*/

const lastName = prompt("what is your Last name?") // 입력: kim

const user = {
    username: "nico",
    age: 21,
    ...(lastName !== "" && {lastName})
};   
console.log(user) // 출력: {username: 'nico', age: 21, lastName: 'kim'}