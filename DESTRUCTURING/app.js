/* const settings = {
    color: {
        chosen_color: "dark"
    }
};

const {
    color: {chosen_color}
} = settings;

console.log(chosenColor); // 오류 발생
 */

/* 
const settings = {
    color: {
        chosen_color: "dark"
    }
};

const {
    color: {chosen_color: chosenColor} // 리네이밍(Renaming)
} = settings;

console.log(chosenColor); // dark
 */


/*
const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = 'green';

const {
    color: {chosen_color: chosenColor}
} = settings;

console.log(chosenColor); // 오류 발생 
*/


/* 
const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = 'green';

({
    color: {chosen_color: chosenColor}
} = settings);

console.log(chosenColor); // dark 
*/

/* 
const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = 'green';
console.log(chosenColor); // green

({
    color: {chosen_color: chosenColor}
} = settings);

console.log(chosenColor); // dark  
*/

