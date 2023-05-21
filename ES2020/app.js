// or(||)연산자는 한 변수값이 false로 처리될 때 대신해서 출력할 값을 지정해줌. (디폴트값 지정)

/*
 let point;
console.log("your point is", point) // your point is undefined
console.log("your point is", point || "nothing") // your point is nothing
*/

/*
let point = 0;
console.log("your point is", point) // your point is 0
console.log("your point is", point || "nothing") // your point is nothing
*/




// ??연산자는 한 변수값이 null이거나 undefined일때만 대신해서 출력할 값을 지정해줌.

/*
let point;
console.log("your point is", point) // your point is undefined
console.log("your point is", point ?? "nothing") // your point is nothing
*/

/* 
let point = 0;
console.log("your point is", point) // your point is 0
console.log("your point is", point ?? "nothing") // your point is 0
*/

/*
 friend = {
    name:"nico"
}

console.log(friend.name) // nico
console.log(friend.profile) // undefined
// console.log(friend.profile.email) // 오류 발생
console.log(friend.profile && friend.profile.email) // undefined
console.log(friend.profile && friend.profile.email && friend.profile.email.provider) // undefined

console.log(friend?.profile?.email?.provider) // undefined 
*/

/////////////////////////////

/*
 const person = {
    name:"nico",
    age: 12
}

Object.values(person) //  ['nico', 12]

Object.entries(person) // [ ['name', 'nico'], ['age', 12] ]
Object.entries(person).forEach(item => console.log(item[0], item[1])) // name nico  // age 12

Object.fromEntries([ ['name', 'nico'], ['age', 12] ]) // {name: 'nico', age: 12} 
 */

///////////////////

/* 
const arr = [1,[2,3],[[4,5,6]],[[[7,8,9,10]]]]
arr // [1, Array(2), Array(1), Array(1)]
arr.flat() // [1, 2, 3, Array(3), Array(1)]
arr.flat(2) // [1, 2, 3, 4, 5, 6, Array(4)]
arr.flat(3) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
*/

/////////////////////////

/*
 const fruits = ["apple","strawberry","avocado","tomato"]

console.log(fruits) // ['apple', 'strawberry', 'avocado', 'tomato']
fruits.sort() // ['apple', 'avocado', 'strawberry', 'tomato']
console.log(fruits) // ['apple', 'avocado', 'strawberry', 'tomato']
*/

/* 
function sortByLength(A, B) {
    return A.length - B.length
}

fruits.sort(sortByLength) // ['apple', 'tomato', 'avocado', 'strawberry']
console.log(fruits) //


/* 
function sortByLength(A, B) {
    return B.length -  A.length
}
fruits.sort(sortByLength) //  ['strawberry', 'avocado', 'tomato', 'apple']
console.log(fruits) //
*/
 
///////////////////////

 
/* 
const p = Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json")
])
.then(response => console.log("성공", response))
.catch(e => console.log("실패",e))
// 성공 [Response, Response, Response, Response]
*/

/*
const p = Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://qqqqqqqqqyts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json")
])
.then(response => console.log("성공", response)) 
.catch(e => console.log("실패",e)) 
// 실패 TypeError: Failed to fetch
*/


//////////////


/* 
const p = Promise.allSettled([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json")
])
.then(response => console.log("성공", response))
.catch(e => console.log("실패",e)) 
// 성공 [ {status: 'fulfilled', value: Response}, {status: 'fulfilled', value: Response}, {status: 'fulfilled', value: Response}, {status: 'fulfilled', value: Response} ]
*/

/* 
const p = Promise.allSettled([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://qqqqqqqqqyts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json")
])
.then(response => console.log("성공", response))
.catch(e => console.log("실패",e)) 
// 성공 [{status: 'fulfilled', value: Response}, {status: 'rejected', reason: TypeError...}, {status: 'fulfilled', value: Response}, {status: 'fulfilled', value: Response} ] 
*/