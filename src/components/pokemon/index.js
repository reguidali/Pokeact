import { useState,useEffect } from 'react'; 
import { getResource } from '../../services/pokemon'

function Pokemon() {

    const [state, setState] = useState({});
    const [types, setTypes] = useState({});

    const onChange = (event) => {
        const { value } = event.target;
        getPokemon(value); 
     };

    const getPokemon = async (pokemonName) => { //async = determina q é assíncrono
        const result = await getResource("pokemon", pokemonName);
        setState(result); //o state armazena o resultado do fetch
        getType(result?.types[0]?.type?.name);
    };

    const getType = async (typeName) => { //async = determina q é assíncrono   
        setTypes(getResource("type", typeName)); //o state armazena o resultado do fetch
    };

    useEffect( () => { //só vai atualizar quando tiver alteração
        getPokemon("bulbasaur");
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
                <div>Forte contra, sei la</div>
            </div>
        </div>
    );
  }
  
  export default Pokemon;