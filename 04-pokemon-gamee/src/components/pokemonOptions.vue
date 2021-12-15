<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 mt-3">
        <div class="options-container">
          <ul v-if="hideOpts">
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('pokemonSelect', pokemon.id)" > {{ pokemon.name }} </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    pokemons :{
      type : Array,
      required : true
    },
    disButons :{
      type: Number
    }
  },
  data(){
    return{
      showButtons : Boolean,
      message : Boolean
    }
  },
  computed:{
    hideOpts (){
      return this.disButons === 0 ? this.message = false : this.message = true
    }
  }
}
</script>

<style>

</style>