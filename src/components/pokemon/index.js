import { useState,useEffect } from 'react'; 

function Pokemon() {

    const [state, setState] = useState({});

    const onChange = (event) => {
        const { value } = event.target;
        getPokemon(value); 
     };

    const getPokemon = async (pokemonName) => { //async = determina q é assíncrono

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
        getPokemon("");
    },[]);

    const pokemonType = state.types ? state.types[0]?.type?.name : null;
    return (
        <div>
            <div className='searchPokemon'>
            WHO IS THIS POKEMON?  <input type="text" onChange={onChange} />
            </div>
            <div className="pokeCard">
                <pokeColor className={pokemonType}>
                <pokeId>#{state.id ? state.id : null}</pokeId>
                <img alt='Pokemon' src={state.sprites ? state.sprites?.front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'}/>
                </pokeColor>
                <p className='pokeName'>{state.species ? state.species?.name : null} {/*? = só imprima se existir*/}</p>
                <div className={'pokeType ' + pokemonType}>{pokemonType}</div>
                <p>Ability: {state.abilities ? state.abilities[1]?.ability?.name : null} {/*? = só imprima se existir*/}</p>
            </div>
        </div>
    );
  }
  
  export default Pokemon;