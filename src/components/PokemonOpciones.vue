<template>
  <div class="opciones-container">
    <ul>
      <li
        @click="pasarPadre(pokemon.id)"
        v-for="pokemon in listaPokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listaPokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pasarPadre(id) {
      console.log(id);
      // envio desde el hijo
      this.$emit("seleccionado", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  width: 250px;
  margin-top: 10px;
}
.opciones-container {
  display: flex;
  justify-content: center;
}
</style>