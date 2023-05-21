/* 
let name = prompt("what is your name?")
if(!name) {
    name = "anonymous";
}
console.log(`Hello ${name}`);
// 입력: (없음)     // 출력: Hello anonymous
// 입력: seongjin  // 출력: Hello seongjin
*/


/* 
let name = prompt("what is your name?")
name ||= "anonymous"; // name의 값이 falsy(0, 빈 문자열, null, undefined, false)일 경우, "anonymous"가 할당됨.

console.log(`Hello ${name}`);
// 입력: (없음)     // 출력: Hello anonymous
// 입력: seongjin  // 출력: Hello seongjin
*/


////////////////

/* 
const user = {
    username: "nico",
    password: 1234
};

if (user.password) {
    user.password = "****"
}
console.log(user) // {username: 'nico', password: '****'}
*/

/* 
const user = {
    username: "nico",
    password: 1234
};
user.password &&= "****"

console.log(user) // {username: 'nico', password: '****'} 
*/


///////////////////////


/* 
const user = {
    username: "nico",
    password: 1234,
    isAdmin: null
};
user.isAdmin ??= "unknown"

console.log(user) // {username: 'nico', password: 1234, isAdmin: 'unknown'}
*/

/* 
const user = {
    username: "nico",
    password: 1234,
    isAdmin: undefined
};
user.isAdmin ??= "unknown"

console.log(user) // {username: 'nico', password: 1234, isAdmin: 'unknown'}
*/

/*
 const user = {
    username: "nico",
    password: 1234,
    isAdmin: false
};
user.isAdmin ??= "unknown"

console.log(user) // {username: 'nico', password: 1234, isAdmin: false}
*/

/*  
const user = {
    username: "nico",
    password: 1234,
    isAdmin: 0
};
user.isAdmin ??= "unknown"

console.log(user) // {username: 'nico', password: 1234, isAdmin: 0}
*/

/*
 const user = {
    username: "nico",
    password: 1234,
    isAdmin: ""
};
user.isAdmin ??= "unknown"

console.log(user) // {username: 'nico', password: 1234, isAdmin: ''}
 */


///////////////////////


/*
 const name = "Nicolaso"
console.log(name) // Nicolaso
name.replaceAll("o", "w"); // Nicwlasw
console.log(name) // Nicolaso 
*/

/* 
const arr = [1, 2]
console.log(arr) // [1, 2]
arr.push(3)
console.log(arr) // [1, 2, 3] 
*/