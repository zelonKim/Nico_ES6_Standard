/* 
const hello = Symbol("hello");
const bye = Symbol("hello");

console.log( hello === bye ) // false 
*/



/* 
const superBig = {
    nico: {
        ages:12
    },
    nico: {
        handsome: true
    }
};
console.log(superBig) // { nico: {handsome: true} } 
console.log(Object.keys(superBig)) // ['nico'] 
*/


/*
const superBig = {
    [Symbol("nico")]: {
        ages:12
    },
    [Symbol("nico")]: {
        handsome: true
    }
};
console.log(superBig) // { Symbol(nico): {ages: 12},  Symbol(nico): {handsome: true} } 
console.log(Object.keys(superBig)) // [] 
*/




/* 
const days = new Set(["월","화","수","목","금","금","금","금"])
console.log(days) // {'월', '화', '수', '목', '금'}

console.log(days.has("토")) // false
console.log(days.has("금")) // true

console.log(days.add("일"))
console.log(days) // {'월', '화', '수', '목', '금', '일'}

console.log(days.delete("월"))
console.log(days) //  {'화', '수', '목', '금', '일'}

// console.log(days.clear())
// console.log(days) // { }

console.log(days.size) // 5 
*/



/* 
const weakset1 = new WeakSet()

greeting1 = {hello: 1}
greeting2 = ["hello"]
greeting3 = [1]

weakset1.add(greeting1) // 정상 실행
weakset1.add(greeting2) // 정상 실행
weakset1.add(greeting3) // 정상 실행 
*/



 const map = new Map();

console.log(map.set("age"))
console.log(map.set("age",28)) // {'age' => 28}
console.log(map.entries()) // {'age' => 28}
console.log(map.has("age")) // true
console.log(map.get("age")) // 28


/* 
const weakmap1 = new WeakMap()

weakmap1.set("hello") // 오류 발생
weakmap1.set(1) // 오류 발생

greeting1 =  {hello: 1}
greeting2 =  ["hello"]
greeting3 =  [1]

weakmap1.set(greeting1) // 정상 실행
weakmap1.set(greeting2) // 정상 실행
weakmap1.set(greeting3) // 정상 실행 
*/