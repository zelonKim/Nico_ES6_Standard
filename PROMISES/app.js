/* 
const hello = fetch("http://google.com");
console.log("seongjin"); 
// seongjin
// 에러 발생 
*/


/* 
const hello = fetch("http://google.com");
console.log("seongjin"); 
console.log(hello); 
// seongjin
// Promise {<pending>}
// 에러 발생  
*/


/* 
const amIGood = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("Yes you are");
    }, 3000)
});

console.log(amIGood); 

setInterval(()=> {
    console.log(amIGood);
},1000); 

// Promise {<pending>}
// Promise {<pending>}
// Promise {<pending>}
// Promise {<fulfilled>: 'Yes you are'}
// Promise {<fulfilled>: 'Yes you are'}
// Promise {<fulfilled>: 'Yes you are'}
// Promise {<fulfilled>: 'Yes you are'} ... 
*/


/*
 const amIGood = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("Yes you are");
    }, 3000)
});

console.log(amIGood)
amIGood.then(value => console.log(value))
// Promise {<pending>}
// (3초후) Yes you are 
*/


/* 
const amIGood = new Promise((resolve, reject) => { 
    setTimeout(() => {
        reject("Yes you are");
    }, 3000)
});

console.log(amIGood)
amIGood.then(value => console.log(value))
// Promise {<pending>}
// (3초후) 오류 발생 
*/


/*
 const amIGood = new Promise((resolve, reject) => { 
    setTimeout(() => {
        reject("Yes you are");
    }, 3000)
});

console.log(amIGood)
amIGood.then(value => console.log(value)).catch(value=>console.log(value));
// Promise {<pending>}
// (3초후) Yes you are 
*/


/* const amIGood = new Promise((resolve, reject) => { 
    resolve(2);
});

amIGood
    .then(number => console.log(number * 2))
    .then(otherNumber => console.log(otherNumber * 2));
// 4
// NaN
*/


/* const amIGood = new Promise((resolve, reject) => { 
    resolve(2);
});

amIGood
    .then(number => { console.log(number * 2); return number * 2 })
    .then(otherNumber => console.log(otherNumber * 2));
// 4
// 8
// then 체인의 경우, return 해준 값이 다음 then의 콜백함수의 매개변수로 들어감. */


/* 
const amIGood = new Promise((resolve, reject) => { 
    resolve(2);
});

const timesTwo = number => number * 2

amIGood
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(lastNumber => console.log(lastNumber))
// 64 
*/



/*
 const amIGood = new Promise((resolve, reject) => { 
    resolve(2);
});

const timesTwo = number => number * 2

amIGood
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then( () => {
        throw Error("something is wrong")
    })
    .then(lastNumber => console.log(lastNumber))
// 오류 발생 
*/


/*
 const amIGood = new Promise((resolve, reject) => { 
    resolve(2);
});

const timesTwo = number => number * 2

amIGood
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then( () => {
        throw Error("something is wrong")
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(err =>console.log(err))
// Error: something is wrong (출력) 
*/


/* 
const amIGood = new Promise((resolve, reject) => { 
    reject(2);
});

const timesTwo = number => number * 2

amIGood
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then( () => {
        throw Error("something is wrong")
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(err =>console.log(err))
// 2
*/

//------------------------------------------


/* 
 const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 5000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 1000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Third"), 3000);
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then(values => console.log(values));
// ( 5초후 ) ['First', 'Second', 'Third']
// Promise.all([])은 배열 안의 모든 Promise가 resolve될때까지 기다렸다가, 배열에 입력된 순서에 다시 맞춰서 값을 가져옴. 
*/


/* 
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Second"), 1000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Third"), 3000);
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err)); 
// (1초후) Second
// 한 Promise가 reject되면 다른 Promise들은 resolve되지 않음.
 */

//------------------------------

/*
 const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 5000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 8000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Third"), 3000);
});

const motherPromise = Promise.race([p1, p2, p3]);
motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err)); 
// (3초후) Third
// Promise.race([])는 배열안의 Promise 중 가장 빠른 하나만 실행시킴.
*/

// ----------------------

/*
 const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 5000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 8000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Third"), 3000);
});

const motherPromise = Promise.any([p1, p2, p3]);
motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err)); 
// (3초후) Third 
*/


/* 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("First"), 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Second"), 8000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Third"), 3000);
});

const motherPromise = Promise.any([p1, p2, p3]);
motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err)); 
// AggregateError: All promises were rejected (출력)
*/



//----------------------


/*
 const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 3000)
})

p1.then(value => console.log(value))
    .finally(()=> console.log("I`m done"))

// (3초후) First 
//        I`m done 
*/

/* 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Second"), 3000)
})

p1.then(value => console.log(value))
    .finally(()=> console.log("I`m done"))
// (3초후) I`m done
//        오류 발생 
*/


/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Second"), 3000)
})

p1.then(value => console.log(value))
    .catch(err => console.log(err))
    .finally(()=> console.log("I`m done"))
// (3초후) Second
//         I`m done */


//-------------------------


/* 
fetch("https://nomadcoders.co/")
    .then(response => console.log(response))
    .catch(e => console.log(e));
// Response {type: 'cors', url: 'https://nomadcoders.co/', redirected: false, status: 200, ok: true, …}
*/


/*
 fetch("https://nomadcoders.co/")
    .then(response => console.log(response.text()))
    .catch(e => console.log(e));
// Promise {<pending>}
*/


/* 
fetch("https://nomadcoders.co/")
    .then(response => response.text())
    .then(second => console.log(second))
    .catch(e => console.log(e));
//<!DOCTYPE html><html lang="ko"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"/><link rel="stylesheet" href="/SpoqaHanSansNeo.css"/><link rel="shortcut icon" sizes="16x16 32x32 64x64" href="/m.png"/><title>노마드 코더 Nomad Coders – Clone Startups. Learn to Code.</title>...
*/
