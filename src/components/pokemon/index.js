import { useState,useEffect } from 'react'; 

function Pokemon() {
    
    const [state, setState] = useState({});

    const getPokemon = async () => { //async = determina q é assíncrono

        const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => { //await = fala que é pra esperar o retorno
            console.log(response);
            return response.json();
        }).then((response) => {
            console.log(response);
            return response;
        }); 
        setState(result); //o state armazena o resultado do fetch
    };

    useEffect( () => { //só vai atualizar quando tiver alteração
        getPokemon();
    },[]);

    return (
      <h1>
        Ola pokemon.
        {state.abilities ? state.abilities[1]?.ability?.name : null} {/*? = só imprima se existir*/}
      </h1>
    );
  }
  
  export default Pokemon;