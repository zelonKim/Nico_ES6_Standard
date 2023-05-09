/* const button = document.querySelector("button")

button.addEventListener("click", function() {
    console.log(this);}
);  // 버튼을 클릭하면 콘솔 창에 <button>hello</button> 가 표시됨.
*/

/* 
const button = document.querySelector("button")

button.addEventListener("click", function() {
    this.style.backgroundColor = "red";}
);  // 버튼을 클릭하면 버튼이 빨간색으로 바뀜.
*/




/* 
const button = document.querySelector("button")

button.addEventListener("click", () => { // 화살표 함수로 변환
    console.log(this);}
);  // 버튼을 클릭하면 콘솔 창에 window객체가 표시됨.
*/


/* 
const button = document.querySelector("button")

button.addEventListener("click", () => { 
    this.style.backgroundColor = "red";}
);  // 버튼을 클릭하면 오류가 발생함.
*/



/* const nico = {
    name: "seongjin",
    age: 28,
    addYear: function() {
        this.age++; // this가 nico 객체를 가리킴.
    }
};
console.log(nico); // {name: 'seongjin', age: 28, addYear: ƒ} 

nico.addYear();
console.log(nico); // {name: 'seongjin', age: 29, addYear: ƒ} // age가 1 증가함.
*/




const nico = {
    name: "seongjin",
    age: 28,
    addYear: () => { // 화살표 함수로 변환
        this.age++;  // this가 Window객체를 가리킴.
    }
};
console.log(nico); // {name: 'seongjin', age: 28, addYear: ƒ}

nico.addYear();
console.log(nico); // {name: 'seongjin', age: 28, addYear: ƒ}  // age가 그대로임. 
