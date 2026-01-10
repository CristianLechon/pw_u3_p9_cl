<template>
  <h2>Hola mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <h3>{{ idEstudiante }}</h3>
  <button @click="presentarId()">Presentar</button>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null,
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    //this.idEstudiante = this.$route.params.id;
    // path query
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);

  },
  methods: {
    presentarId() {
      this.idEstudiante = this.$route.params.id;
      return this.idEstudiante;
    },
  },
};
</script>

<style scoped>
</style>