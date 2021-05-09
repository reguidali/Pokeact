import { useState,useEffect } from 'react'; 

function Pokemon() {
    
    const [pokemonName, setPokemonName] = useState("");

    const [state, setState] = useState({});

    const onChange = (event) => {
        const { value } = event.target
        setPokemonName(value); 
        console.log(value);
     };

    const getPokemon = async () => { //async = determina q é assíncrono

        const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName).then((response) => { //await = fala que é pra esperar o retorno
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
    },[onChange]);

    return (
    <header>
        <div className='searchPokemon'>
          WHO IS THIS POKEMON?  <input type="text" onChange={onChange} />
        </div>
        <div className='cardPokemon'>
            <img alt='Pokemonito' src={state.sprites ? state.sprites?.front_default : null}/>
            <p>Name: {state.species ? state.species?.name : null} {/*? = só imprima se existir*/}</p>
            <p>Ability: {state.abilities ? state.abilities[1]?.ability?.name : null} {/*? = só imprima se existir*/}</p>
        </div>
    </header>
    );
  }
  
  export default Pokemon;