
/* 
let name = "seongjin"
console.log(`hello ${name}`); // hello seongjin
// 템플릿 리터럴은 ${}안에 변수를 넣을 수 있음.


const add = (a,b) => a + b
console.log(`hello ${add(10,20)}`) // hello 30
// 템플릿 리터럴은 ${}안에 표현식을 넣을 수도 있음.
*/


///////////////////////////


/* 
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    h1.className = "title";
    div.append(h1);
    wrapper.append(div);
};
addWelcome();  // 화면에 Hello가 출력됨. 
*/

/* 
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
        `;
        wrapper.innerHTML = div;
};

addWelcome(); // 화면에 Hello가 출력됨. 
*/

///////////////

/*
 const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const list = `
    <h1>People I love<h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`)}
    </ul>    
    `;
wrapper.innerHTML = list;
*/
   
///////////////////

/*
 const styled = css => console.log(css)

styled(`border-radius:10px;
color:blue;`)
// border-radius:10px;
// color:blue; 
*/

/* 
const styled = css => console.log(css)

styled`border-radius:10px;
color:blue;`
// ['border-radius:10px;\ncolor:blue;', raw: Array(1)]
*/


/* 
const styled = aElement => {
    const el = document.createElement(aElement);
    return el;
};

const title = styled("h1")`
    border-radius:10px;
    color:blue;
`;
console.log(title); // 오류 발생 (styled(...)is not a function) 
*/
/* 
const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        console.log(args[0]);
    };
};

const title = styled("h1")`
    border-radius:10px;
    color:blue;
`;
console.log(title);
//     border-radius:10px;
//     color:blue; 
*/

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const aStyles = args[0];
        el.style = aStyles;
        return el;
    };
};

const title = styled("h1")`
    background-color: red;
    color: blue;
`;
console.log(title); // <h1 style="background-color: red; color: blue;">we are good</h1>

document.body.append(title)
title.innerText="we are good" // 화면에 스타일이 적용된 "we are good"을 출력함.


 