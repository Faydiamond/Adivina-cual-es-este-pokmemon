import pokeApi from '../api/pokeApi'

const getPokemons = ()=>{
    const pokemonArray  = Array.from (Array(650))
    return pokemonArray.map((_,index) =>index+1 )
}

const getPokemonOptions = async ()=>{

    const pokeMix = getPokemons().sort( ()=>Math.random() -0.5  )
    const Pokemons =  await getPokemonNames(pokeMix.splice(0,4))
    //console.log( 'pokeMix', pokeMix );
    //console.log(getPokemons());
    //console.log('en el metodo',Pokemons);
    return Pokemons

}

const getPokemonNames = async  ( [uno,twoo,three,four] = [])=>{
    
    //const resPokeApi = await pokeApi.get(`/599`)
    //console.log('Nombre del pokemon:  ', resPokeApi.data.name);
    const promiseArr = [
        pokeApi.get(`/${uno}`),
        pokeApi.get(`/${twoo}`),
        pokeApi.get(`/${three}`),
        pokeApi.get(`/${four}`),
    ]

    const [Poke1,Poke2,Poke3,Poke4 ] = await Promise.all(promiseArr)
    return [{name: Poke1.data.name, id: Poke1.data.id},
        {name: Poke2.data.name, id: Poke2.data.id},
        {name: Poke3.data.name, id: Poke3.data.id} ,
        {name: Poke4.data.name, id: Poke4.data.id}   ]
}

export default getPokemonOptions