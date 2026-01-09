<template>
  <div class="view-container">
    <Pregunta />
  </div>
</template>

<script>
import Pregunta from "@/components/Pregunta.vue";
export default {
  components: {
    Pregunta,
  },
};
</script>

<style scoped>
.view-container,
.pregunta-container {
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  align-items: center; /* centrado vertical */
  justify-content: center; /* centrado horizontal */
}

.pregunta-container {
  position: relative;
  min-height: 100vh; /* altura de toda la pantalla */
}

input {
  width: 350px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

input:focus {
  outline: none;
}

h1,
h2,
p {
  color: white;
}

p {
  font-size: 20px;
}

h2 {
  margin-top: 150px;
}
</style>