/*
const bestFriends = (first, second, third, fourth) => {
    console.log(`My best friend is ${first}`);
    console.log(`The others friends are ${second}, ${third}, ${fourth}`)
}
bestFriends("nico", "lynn", "dal", "seongjin")
// My best friend is nico
// The others friends are lynn, dal, seongjin
*/


/* 
const bestFriends = (first, ...rest) => {
    console.log(`My best friend is ${first}`);
    console.log(`The others friends are ${rest}`)
}
bestFriends("nico", "lynn", "dal", "seongjin")
// My best friend is nico
// The others friends are lynn,dal,seongjin
*/


/* 
const bestFriends = (first, ...rest) => {
    console.log(rest)
}
bestFriends("nico", "lynn", "dal", "seongjin")
// ['lynn', 'dal', 'seongjin']
 */

// -----------------------------


/* 
const user = {
    name: "nico",
    age: 22,
    password: 1234
};

user.password = null

console.log(user) // {name: 'nico', age: 22, password: null}
*/


/* 
const user = {
    name: "nico",
    age: 22,
    password: 1234
};

const removePassword = ({password, ...rest}) => rest

const safeUser = removePassword(user)
console.log(safeUser)  // {name: 'nico', age: 22} 
*/


/*
const user = {
    name: "nico",
    age: 22,
    password: 1234,
};

const setCountry = ({ country = "KR" , ...rest}) => ({ country, ...rest})  // 비구조화 + 나머지 매개변수 + 전개 연산자
console.log(setCountry(user)); // {country: 'KR', name: 'nico', age: 22, password: 1234}
*/


const user = {
    email: "nico",
    age: 22,
    password: 1234,
};

const rename = ({ email: name, ...rest }) => ({ name, ...rest})

console.log(rename(user)); // {name: 'nico', age: 22, password: 1234}