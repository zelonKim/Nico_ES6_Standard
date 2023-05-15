/* 
var name = "peter"
name ="john" // var키워드로 변수를 선언했을 경우 -> 변수의 값이 재할당 되어 변함.
console.log(name) // john

let name = "peter"
name = "john"  // let키워드로 변수를 선언했을 경우 -> 변수의 값이 재할당 되어 변함.
console.log(name)  // john

const name = "peter"
name="john" // const키워드로 변수를 선언했을 경우 -> 변수의 값이 재할당 되지 못하게 해줌.
console.log(name) // 에러 발생

const person = {
    name: "Nicolas"
}
person = true // 에러 발생
person.name = "seongjin"
console.log(person.name) // seongjin (정상 실행) 
*/





/* 
console.log(myName) // undefined
var myName = "nico"; // 호이스팅 발생 
*/

/* 
console.log(myName) // 에러 발생
let myName = "nico";  
*/

/* 
console.log(myName) // 에러 발생
const myName = "nico";  
*/





/* 
if (true) {
    const hello = "hi" // const로 선언된 변수는 블록 스코프를 가짐.(블록 { }안에서만 유효함.)
}
console.log(hello); // 오류 발생 (hello is not defined)
*/

/* 
if (true) {
    let hello = "hi" // let으로 선언된 변수는 블록 스코프를 가짐.(블록{ }안에서만 유효함.)
}
console.log(hello); // 오류 발생 (hello is not defined)  
*/

/*
 if (true) {
    var hello = "hi" // var로 선언된 변수는 블록 스코프를 갖지 않음. (블록{ }밖에서도 유효함.)
}
console.log(hello); // hi  (정상 실행)  
*/


/* 
function a(){
    const hello = "hi" // const로 선언된 변수는 펑션 스코프를 가짐. (function 안에서만 유효함.)
}
console.log(hello) // 오류 발생 (hello is not defined)
*/

/* 
function a(){
    let hello = "hi" // let으로 선언된 변수는 펑션 스코프를 가짐. (function 안에서만 유효함.)
}
console.log(hello) // 오류 발생 (hello is not defined)
*/

/* 
function a() {
    var hello = "hi" // var로 선언된 변수는 펑션 스코프를 가짐. (function 안에서만 유효함.)
}
console.log(hello); // 오류 발생 (hello is not defined)  
*/

