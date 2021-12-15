<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4" >
        <div v-if="!pokemon"> 
          <h2>Espere Por Favor ...</h2>
        </div>
        <div v-else>
          <h1 class="title mt-3"> ¿ Adivina, cual es este Pokemon ? </h1>
          <!-- Componente que muestra la imagen del pokemon -->
          <pokemonPictures :pokemon="pokemon.id" :showPokemon="showPokemon"/> <!--50-->
          <!-- Componente que muestra las opciones posibles  del pokemon -->
          <pokemonOptions :disButons="lifes"  :pokemons="pokeArray" @pokemon-Select="CheckAnswer($event)"/>
          <template v-if="showAnswer">
            <h2 class="resPoke"> {{ msgResult }} </h2>
            <div class="lipo" v-if="showRefresh">
              <button class="btn-refes" @click="refresh"> Reiniciar Juego </button> 
            </div>
          </template>  
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>

  
</template>

<script>
import pokemonPictures from '../components/pokemonPictures.vue'
import pokemonOptions from '../components/pokemonOptions.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'


export default {
  components:{
     pokemonPictures,
     pokemonOptions
  },
  data(){
    return {
        pokeArray   : [],
        pokemon     : null,
        showPokemon : false,
        msgResult   : '',
        showAnswer  : false,
        lifes       : 2,
        showRefresh : false
    }
  },
  methods :{
    async getPokemonsMix(){
      this.pokeArray = await getPokemonOptions()
      //
      const randInt = Math.floor(Math.random() *4)
      //console.log('Numero Random ',randInt);
     this.pokemon = this.pokeArray[randInt]
     console.log(' Pokemon cual es ', this.pokemon );
    },
    CheckAnswer(idPokemon){
      //console.log('Pokemon seleccionado',this.pokemon);
       // idPokemon === this.pokemon.id ? 'Si' : 'No'
       this.showAnswer = true
       if(idPokemon === this.pokemon.id){
         //console.log('Son iguales');
         this.showPokemon = true
         this.msgResult   = `Has Adivinado, felicidades conoces a : ${this.pokemon.name}  `
         this.showRefresh = true
         return
       }
       //console.log('son distintos');
       this.lifes--
       this.msgResult   = `Error, no conoces al pokemon que ves en pantalla? `
       this.showPokemon = false
       if(this.lifes === 0){
         this.msgResult   = `Perdiste, has gastado tus oportunidades! `
         this.showRefresh = true
       }
    },
    refresh(){
      //console.log('Refrescar');
        this.pokeArray = [],
        this.pokemon = null,
        this.showPokemon = false,
        this.msgResult = ''
        this.getPokemonsMix()
        this.showAnswer = false
        this.lifes = 2
    }
  },
    computed: {
    // un getter computado
    howAct: function () {
      // `this` apunta a la instancia vm
      return this.message.split('').reverse().join('')
    }
  },
  mounted(){
    this.getPokemonsMix()
    console.log('mounted');
  }

}
</script>

<style spoke>
  .resPoke{
    font-weight: bold;
  }

.btn-refes{
     border-radius: 5px;
    border: 3px solid #3761a8;
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    text-align: center !important;
    height: 35px;
    color: black !important;
    background-color: #feca1b;
    font-weight: bold;
    border-color: #3761a8;
    margin: auto;
   
}
.lipo{
 text-align: center;
 margin-left: 40px;
 margin-top: 35px;
}
</style>