<template>
  <div>
    <img v-if="imagen" :src="imagen" alt="No puede ver" />
    <div class="oscuro"></div>
    <div class="pregunta-container">
      <input
        v-model="pregunta"
        id="id_input"
        type="text"
        placeholder="Hazme una pregunta"
      />
      <p>Recuerda terminar con el signo de interogación (?)</p>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import {
  consumirAPIFacade,
  consumirAPIFacade2,
} from "../clients/YesNoClient.js";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
    };
  },
  // (watch) Observadores de propiedades reactivas
  watch: {
    pregunta(value, oldValue) {
      // poniendo el mismo nombre, con 2 argumentos value y oldValue
      //console.log("value ",value);
      //console.log("oldValue ",oldValue);
      if (value.includes("?")) {
        //Llamar al API
        this.respuesta = 'Pensando....';
        this.consumir();
      }
    },
  },

  methods: {
    async consumir() {
      const resp = await consumirAPIFacade();
      this.imagen = resp.image;
      console.log("Respuesta Final");
      console.log(resp);
      console.log(resp.answer);
      this.respuesta = resp.answer;
      
    },
  },
};
</script>

<style scoped>
img,
.oscuro {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
h1 {
  font-size: 80px;
}

.oscuro {
background-color: rgba(0, 0, 0, 0.4);
}
</style>