<template>
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-md-12 mt-3 ml-6 pokemon-container" >
        <img :src="imgSrc" alt="pokemon" class="hidden-pokemon">
        <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in">
      
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props : { pokemon: { type: Number, required : true} , showPokemon:{ type: Boolean, required: true, default: false }},
  data () {
    return{
      idPokemon : this.pokemon
    }
  },
  computed:{
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
    }
  }

}
</script>

<style  scoped>
.hidden-pokemon{
  filter: brightness(0);
}
</style>>

