/* 
function* listPeople() {
    yield "Dal";
    yield "Flynn";
    yield "Mark";
    yield "seongjin";
    yield "nico";
}

const listG = listPeople();
console.log(listG) // listPeople {<suspended>}
console.log(listG.next()) // {value: 'Dal', done: false} // done: false는 제너레이터가 아직 끝나지 않았음을 의미함.
console.log(listG.next()) // {value: 'Flynn', done: false}
console.log(listG.next()) // {value: 'Mark', done: false}
console.log(listG.next()) // {value: 'seongjin', done: false}
console.log(listG.next()) // {value: 'nico', done: false}
console.log(listG.next()) // {value: undefined, done: true} 
*/


/*
const friends = ["Dal", "Flynn", "Mark", "seongjin","nico"]

function* friendTeller() {
    for (const friend of friends) {
        yield friend;
    }
}

const friendLooper = friendTeller();
console.log(friendLooper) // friendTeller {<suspended>}
console.log(friendLooper.next()) // {value: 'Dal', done: false}
console.log(friendLooper.next()) // {value: 'Flynn', done: false}
console.log(friendLooper.next()) // {value: 'Mark', done: false}
console.log(friendLooper.next()) // {value: 'seongjin', done: false}
console.log(friendLooper.next()) // {value: 'nico', done: false}
console.log(friendLooper.next()) // {value: undefined, done: true}
*/




/*  
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};
const userFilter = {};

const filteredUser = new Proxy(userObj, userFilter)

console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.username) // nico
console.log(filteredUser.age) // 12
console.log(filteredUser.password) // 1234  
 */



/* 
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};
const userFilter = {
    get: () => {
        return "nothing"
    }
};

const filteredUser = new Proxy(userObj, userFilter)

console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.username) // nothing
console.log(filteredUser.age) // nothing
console.log(filteredUser.password) // nothing  
*/



/* 
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};
const userFilter = {
    get: (target) => { // get트랩의 첫번째 매개변수는 타깃 객체임.
        return target
    }
};

const filteredUser = new Proxy(userObj, userFilter)
console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.username) // {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.age) // {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.password) // {username: 'nico', age: 12, password: 1234}
 */




/* 
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};
const userFilter = {
    get: (target, prop) => { // get 트랩의 두번째 매개변수는 프록시가 접근하고 있는 프로퍼티명임.
        return prop
    }
};

const filteredUser = new Proxy(userObj, userFilter)

console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.username) // username
console.log(filteredUser.age) // age
console.log(filteredUser.password) // password 
console.log(filteredUser.hello) // hello 
*/


/* 
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};
const userFilter = {
    get: (target, prop, receiver) => { // get 트랩의 세번째 매개변수는 프록시 객체임. 
        return receiver
    }
};

const filteredUser = new Proxy(userObj, userFilter)

console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.username) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.age) // Proxy(Object) {username: 'nico', age: 12, password: 1234}
console.log(filteredUser.password) // Proxy(Object) {username: 'nico', age: 12, password: 1234} 
*/

/* 
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};

const userFilter = {
    get: (target, prop, receiver) => {
        return prop === "password" ? `${"*".repeat(5)}` : target[prop] 
    }
};

const filteredUser = new Proxy(userObj, userFilter)
console.log(filteredUser.password) // *****
console.log(filteredUser.username) // nico
console.log(filteredUser.age) // 12 
*/


/*
 const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};

const userFilter = {
    deleteProperty: (target, prop) => { // 객체의 프로퍼티를 삭제하려고 할때 작동함.
        if(prop === "password") {
            return;
        } else {
            target[prop] = "It was DELETED"
        }
    }
};

const filteredUser = new Proxy(userObj, userFilter)
console.log(filteredUser) // Proxy(Object) {username: 'nico', age: 12, password: 1234}

delete filteredUser.username 
console.log(filteredUser) // Proxy(Object) {username: 'It was DELETED', age: 12, password: 1234}

delete filteredUser.age 
console.log(filteredUser) // Proxy(Object) {username: 'It was DELETED', age: 'It was DELETED', password: 1234}

delete filteredUser.password
console.log(filteredUser) // Proxy(Object) {username: 'It was DELETED', age: 'It was DELETED', password: 1234}
*/




