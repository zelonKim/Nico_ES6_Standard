/* 
const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingGmail = email.find( item => item.includes("@gmail.com"));

console.log(findingGmail); // nico@gmail.com // find()는 조건에 맞는 첫번째 요소 한 개만 가져옴. 
*/


/*
const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingGmail = email.filter( item => item.includes("@gmail.com"));

console.log(findingGmail); // ['nico@gmail.com', 'suzy@gmail.com'] // filter()는 조건에 맞는 모든 요소를 '새로운 배열'로 가져옴.
*/



/*
const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

email.forEach( item => console.log(item.split("@")[0]) ); // forEach()는 배열의 각 요소마다 함수를 실행시켜줌.
// ksz
// lynn
// nico
// suzy
*/

/*
 const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

email.forEach( item => console.log(item.split("@")[1]) );
// naver.com
// hanmail.com
// gmail.com
// gmail.com 
*/



/* 
const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingUser = email.map( item => item.split("@")[0] );  //map()은 forEach()와 기능은 비슷하지만, 반환된 요소를 '새로운 배열'로 만들어줌.
console.log(findingUser)  // ['ksz', 'lynn', 'nico', 'suzy'] 
*/



/*
const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingOrder = email.map((item, index) => index);
console.log(findingOrder) // [0, 1, 2, 3]
*/



/*
 const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingUserNameAndOrder = email.map((item, index) => { userName: item.split("@")[0], order: index }); // 객체(object)를 리턴함.
console.log(...findingUserNameAndOrder) // 오류 발생
*/


const email = [
    "ksz@naver.com",
    "lynn@hanmail.com",
    "nico@gmail.com",
    "suzy@gmail.com"
];

const findingUserNameAndOrder = email.map((item, index) => ({ userName: item.split("@")[0], order: index })); // 객체(object)를 리턴할때는 반드시 중괄호{ }앞뒤에 소괄호( )를 붙여줘야 함.
console.log(...findingUserNameAndOrder)
// {userName: 'ksz', order: 0} 
// {userName: 'lynn', order: 1}
// {userName: 'nico', order: 2}
// {userName: 'suzy', order: 3}