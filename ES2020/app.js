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

friend = {
    name:"nico"
}

console.log(friend.name) // nico
console.log(friend.profile) // undefined
// console.log(friend.profile.email) // 오류 발생
console.log(friend.profile && friend.profile.email) // undefined
console.log(friend.profile && friend.profile.email && friend.profile.email.provider) // undefined

console.log(friend?.profile?.email?.provider) // undefined