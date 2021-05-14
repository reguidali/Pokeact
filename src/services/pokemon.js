export const getResource = async (endpoint,name) => { //async = determina q é assíncrono

    const result = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${name}`).then((response) => { //await = fala que é pra esperar o retorno
        return response.json();
    }).then((response) => {
        return response;
    }); 
    return result; 

};