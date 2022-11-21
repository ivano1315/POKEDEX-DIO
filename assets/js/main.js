

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function (){

    })