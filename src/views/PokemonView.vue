<template>
  <div>
    <h1>{{ mensaje }}</h1>
    <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
    <PokemonOpciones
      @seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <button @click="destruir()">Destuir</button>
  </div>
</template>

<script>
import PokemonOpciones from "@/components/PokemonOpciones.vue";
import PokemonImagen from "@/components/PokemonImagen.vue";
import {
  obtenerVectorPokemonFacade,
  obtenerAleatorioFachada,
} from "../clients/PokemonClient.js";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: null,
      mostrar: true,
    };
  },
  /* 1ero Crea el componente */
  beforeCreate() {
    console.log("beforeCreate: apenas inicia la instancia del componente");
  },
  created() {
    console.log(
      "create: cuando ya se ejecuto el data, computed, method, watch"
    );
  },
  /* Monta el componente: renderiza o visualiza el componente */
  beforeMount() {
    console.log(
      "beforeMount: justo antes del primer render de un elemento html"
    );
  },
  // para cuando el componente ya se renderizo
  mounted() {
    console.log("Componente montado: cuando ya se renderizo");
    this.iniciarJuego();
  },

  /* Actualizacion de un componente */
  // se ejecuta cindo hubo un cambio antes de
  beforeUpdate() {
    console.log(
      "beforeUpdate: cuando cambio data/props y Vue esta por re-renderizar"
    );
  },
  updated() {
    console.log("updated: cuando ya de actualizo tras la re-renderización");
  },

  /* Desmontaje de un componente */
  beforeUnmount() {
    //console.log("beforeUnmount: justo antes de que el componente se destruya");
  },
  unmounted() {
    //console.log("unmounted: cuando ya fue removido del DOM y destruido");
  },
  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFacade();

      const idAleatorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
      const n = this.pokemonArr[idAleatorio].nombre;
      console.log(n);
    },
    evaluarGanador(idGanador) {
      console.log("valor recibido desde padre");
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log("Ganador");
        this.mensaje = "Haz selecionado el pokemon correcto";
      } else {
        this.mensaje = "Haz selecionado el pokemon incorrecto";
        console.log("Perdedor");
      }
    },
    destruir() {
      this.mostrar = false;
    },
  },
};
</script>

<style scoped>
h1 {
  position: relative;
  left: 36%;
}
</style>