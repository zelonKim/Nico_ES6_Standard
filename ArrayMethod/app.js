



/* 
const friends = Array.of("nico","seongjin","dal","mark");
console.log(friends); // ['nico', 'seongjin', 'dal', 'mark']
*/


/* 
const buttons = document.querySelectorAll("button")

console.log(buttons) // NodeList(10) [button, button, button, button, button, button, button, button, button, button]
// array-like-object (배열은 아닌, 배열 같은 객체임.)

/*
buttons.forEach(button => {button.addEventListener("click",
 () => console.log("I`ve been clicked"));  // buttons는 array-like-object임. -> 오류 발생 
}) 
*/

/*
 Array.from(buttons).forEach(button => {button.addEventListener("click",
 () => console.log("I`ve been clicked")); // buttons는 array임. -> 정상 실행
})   
*/



/* 
const emails = [
    "nico@gamil.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "seongjin@gmail.com",
    "lynn@gorea.com",
    "blah@gamil.com",
    'lala@hanmail.net'
] 
*/


/* const target = emails.find(email => email.includes("@gorea.com"))
console.log(target) // lynn@gorea.com 
*/ 

/* 
const target = emails.findIndex(email => email.includes("@gorea.com"))
console.log(target) // 4   
*/



/* 
const userName = emails[target].split("@")[0] 
let address = emails[target].split("@")[1]
address = "korea.com"
emails[target] = `${userName}@${address}`

console.log(emails) // ['nico@gamil.com', 'dal@yahoo.com', 'mark@hotmail.com', 'seongjin@gmail.com', 'lynn@korea.com'] */

 
/* 
emails.fill("*****", target)
console.log(emails) 


emails.fill("*****",target, target+1)
console.log(emails)  */



