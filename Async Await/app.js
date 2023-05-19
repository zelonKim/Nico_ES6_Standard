/* async function getMovies() {

} */

/* const getNomad = async() => {
    const response = fetch("https://nomadcoders.co/")
    console.log(response)
}
getNomad(); // Promise {<pending>} */


////////////////////////

/* 
const getNomad = () => {
    fetch("https://nomadcoders.co/")
    .then(response => {
        console.log(response);
    })
}
getNomad(); // Response {type: 'cors', url: 'https://nomadcoders.co/', redirected: false, status: 200, ok: true, …}
*/

/* const getNomad = async() => {
    const response = await fetch("https://nomadcoders.co/")
    console.log(response)
}
getNomad(); // Response {type: 'cors', url: 'https://nomadcoders.co/', redirected: false, status: 200, ok: true, …}
 */

//////////////////////////////

/*
 const getNomad = () => {
    fetch("https://nomadcoders.co/")
    .then(response => response.text())
    .then(text => console.log(text))
};
getNomad(); // <!DOCTYPE html><html lang="ko"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack- ...
*/

/* const getNomad = async() => {
    const response = await fetch("https://nomadcoders.co/")
    const json = await response.text();
    console.log(json)
}
getNomad(); // <!DOCTYPE html><html lang="ko"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack- ... */


//////////////////////////


/*
 const getNomad = () => {
    fetch("https://qqqnomadcoders.co/")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(e => console.log(e))
};
getNomad(); // TypeError: Failed to fetch (출력)
 */

/* 
const getNomad = async() => {
    try {
    const response = await fetch("https://qqqnomadcoders.co/")
    const json = await response.text();
    console.log(json)
} catch (e) {
    console.log(e)
}
};
getNomad(); // TypeError: Failed to fetch (출력)
*/

/////////////////////////////

/*
 const getNomad = () => {
    fetch("https://qqqnomadcoders.co/")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(e => console.log(e))
    .finally(() => console.log("we are done"))
};
getNomad(); 
// TypeError: Failed to fetch (출력)
// we are done
*/

/* 
const getNomad = async() => {
    try {
    const response = await fetch("https://qqqnomadcoders.co/")
    const text = await response.text();
    console.log(text)
} catch (e) {
    console.log(e)
} finally {
    console.log("We are done")
}
};
getNomad(); 
// TypeError: Failed to fetch (출력)
// We are done 
*/

//////////////////////

/* 
 const getNomad = () => {
    fetch("https://nomadcoders.co/")
    .then(response => response.text())
    .then(err => { throw Error("I`m hungry")} )
    .then(text => console.log(text))
    .catch(e => console.log(e))
};
getNomad(); // Error: I`m hungry
*/

/*
 const getNomad = async() => {
    try {
    const response = await fetch("https://nomadcoders.co/")
    const text = await response.text();
    throw Error("I`m hungry");
    console.log(text)
} catch (e) {
    console.log(e)
}
};
getNomad(); // Error: I`m hungry 
*/

///////////////////////

const getMovies = async() => {
    try{
        const [moviesResponse, suggestionResponse] = await Promise.all([
        fetch("https://yts.mx/api/v2/list_movies.json"),
        fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
        ]);
        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(),
            suggestionResponse.json()
        ]);
        console.log(movies, suggestions);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("we are done")
    }
};
getMovies();
// {status: 'ok', status_message: 'Query was successful', data: {…}, @meta: {…}}
// {status: 'ok', status_message: 'Query was successful', data: {…}, @meta: {…}}    
