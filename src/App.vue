<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="`/hola/${idEstudiante}`">Hola</router-link> |
    <router-link to="/pregunta">pregunta</router-link> |
    <router-link to="/pokemon">pokemon</router-link>
  </nav>
  <input v-model="idEstudiante" type="text">
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
}

nav {
  padding: 30px;
}
</style>
