/* 
class User {
    constructor() {
        this.username = "Nicolas";
    }
}
console.log(User.username); // undefined
*/

/* 
class User {
    constructor() {
        this.username = "Nicolas";
    }
}
const user = new User(); // 클래스의 인스턴스 생성

console.log(user.username); // Nicolas 
*/



/* 
class User {
    constructor() {
        this.username = "Nicolas";
    }
    sayHello() {
        console.log("Hello, I`m Nicolas");
    }
}
const user = new User();

user.sayHello() // Hello, I`m Nicolas 
*/

/* 
class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log("Hello, I`m Nicolas");
    }
}
const user1 = new User("Nico");
const user2 = new User("seongjin");

console.log(user1.username) // Nico
console.log(user2.username) // seongjin 
*/

/* 
class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
}
const user1 = new User("Nico");
console.log(user1.username) // Nico
user1.sayHello() // Hello, my name is Nico
 */

/*
 class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(this);
    }
}
const user1 = new User("Nico");
user1.sayHello() // User {username: 'Nico'} 
*/

/* 
class User {
    constructor(name) {
        this.username = name;
    }
    sayHello = () => {
        console.log(this.username);
    };
}
const user1 = new User("Nico");
user1.sayHello() // Nico 
*/

/*
 class User {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
}

const user1 = new User("Nico", "Serrano", "nico@gmail.com", 1234)
user1.getProfile() // Nico  nico@gmail.com  1234 
*/


/* 
class User {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword) {
        if( currentPassword === this.password ) {
            this.password = newPassword;
        } else {
            console.log("Can not change password.")
        }
       }
    }
const user1 = new User("Nico", "Serrano", "nico@gmail.com", "1234")
console.log(user1.password) // 1234
user1.updatePassword("hello", "1234");
console.log(user1.password) // hello  
*/


/*
 class Admin extends User {
    deleteWebsite() {
        console.log("Deleting the whole website");
    }
}
const admin1 = new Admin()
admin1.deleteWebsite() // Deleting the whole website
console.log(admin1.email) // undefined

const admin2 = new Admin("Nico", "Serrano", "nico@gmail.com", "1234")
console.log(admin2.email) // nico@gmail.com 
*/

/* 
class Admin extends User {
    constructor(superAdmin){
        this.superadmin = superAdmin;
    }
    deleteWebsite() {
        console.log("Deleting the whole website");
    }
}
const admin3 = new Admin("Nico", "Serrano", "nico@gmail.com", "1234", "seongjin")
console.log(admin3.superadmin) // 오류 발생 
*/

/* class User {
    constructor({username, lastName, email, password}) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword) {
        if( currentPassword === this.password ) {
            this.password = newPassword;
        } else {
            console.log("Can not change password.")
        }
       }
    }
const user1 = new User({
    username: "Nicolas",
    lastName: "Serrano",
    email: "nico@gmail.com",
    password: "1234"
})


class Admin extends User{
    constructor({username, lastName, email, password, superAdmin, isActive}) {
        super({username, lastName, email, password});
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite() {
        console.log("Deleting the whole website");
    }
}
const admin1 = new Admin({
    username: "Nicolas",
    lastName: "Serrano",
    email: "nico@gmail.com",
    password: "1234",
    superAdmin: true,
    isActive: true
}) */


/* 
class Counter {
    constructor({ initialNumber=0, counterId, plusId, minusId }) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners() {
        console.log(this); // Counter {count: 0, counter: span#count, plusBtn: button#add, minusBtn: button#minus}
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase() { // this가 이벤트 타겟을 가리킴. (오류 발생)
        console.log(this); // <button id="add">+</button> 
        this.count = this.count + 1;
        this.repaintCount();
    }
    decrease() { // this가 이벤트 타겟을 가리킴. (오류 발생)
        console.log(this); // <button id="minus">-</button> 
        this.count = this.count - 1;
        this.repaintCount();
    }
    repaintCount() {
        this.counter.innerText = this.count;
    }
}
new Counter({counterId: "count", plusId: "add", minusId:"minus"}) 
 */




class Counter {
    constructor({ initialNumber=0, counterId, plusId, minusId }) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners() {
        console.log(this); // Counter {count: 0, counter: span#count, plusBtn: button#add, minusBtn: button#minus}
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase = () => { // this가 클래스 자체를 가리킴. (정상 실행)
        console.log(this); // Counter {count: 0, counter: span#count, increase: ƒ, decrease: ƒ, repaintcount: ƒ, …}
        this.count = this.count + 1;
        this.repaintCount();
    }
    decrease = () => { // this가 클래스 자체를 가리킴. (정상 실행)
        console.log(this); // Counter {count: 0, counter: span#count, increase: ƒ, decrease: ƒ, repaintcount: ƒ, …}
        this.count = this.count - 1;
        this.repaintCount();
    }
    repaintCount = () => {
        this.counter.innerText = this.count;
    };
}
new Counter({counterId: "count", plusId: "add", minusId:"minus"})
