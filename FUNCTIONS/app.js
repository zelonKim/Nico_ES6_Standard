/*
const names = ['nico','seongjin','lynn']

const hearts = names.map(function(item) { 
    return item + "♥";
});

console.log(hearts); // ['nico♥', 'seongjin♥', 'lynn♥']
*/

/*
const names = ['nico','seongjin','lynn']

function addHeart(item) {
    return item + "♥";
}

const hearts = names.map(addHeart);

console.log(hearts); // ['nico♥', 'seongjin♥', 'lynn♥']
*/

/*
const names = ['nico','seongjin','lynn']

function addHeart(item) {
    return 0;
}

const hearts = names.map(addHeart);

console.log(hearts); // [0, 0, 0]
*/

/*
const names = ['nico','seongjin','lynn']

const hearts = names.map((item) => { 
    return item + "♥";
});

console.log(hearts); // ['nico♥', 'seongjin♥', 'lynn♥']
*/

/*
const names = ['nico','seongjin','lynn']

const hearts = names.map((item, index) => { 
    console.log("we are on", index)
    return item + "♥";
});

console.log(hearts); 
// we are on 0
// we are on 1
// we are on 2
// ['nico♥', 'seongjin♥', 'lynn♥']
*/

/*
const names = ['nico','seongjin','lynn']

const hearts = names.map( item => item + "♥");

console.log(hearts); // ['nico♥', 'seongjin♥', 'lynn♥']
*/

/*
const names = ['nico','seongjin','lynn']

const hearts = names.map( item => 0 );

console.log(hearts); // [0, 0, 0]
*/

/*
const names = ['nico','seongjin','lynn']

const hearts = names.map( item => { item + "♥"} );

console.log(hearts);
*/

/* 
const names = ['nico','seongjin','lynn']

const hearts = names.map( (item, index) => item + "♥" + index );

console.log(hearts); // ['nico♥0', 'seongjin♥1', 'lynn♥2']
*/


const names = ['nico','seongjin','lynn']

const hearts = names.map( () => "♥" );

console.log(hearts) // ['♥', '♥', '♥']
