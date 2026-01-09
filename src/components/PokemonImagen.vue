<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="No se puede renderizar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  // se ejecuta cindo hubo un cambio antes de
  beforeUnmount() {
    console.log("beforeUnmount: justo antes de que el componente se destruya");
  },
  unmounted() {
    console.log("unmounted: cuando ya fue removido del DOM y destruido");
  },
};
</script>

<style>
img {
  position: relative;
  height: 200px;
  left: 46%;
}
.pokemon-container {
  height: 200px;
}
</style>