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
.view-container {
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  align-items: center; /* centrado vertical */
  justify-content: center; /* centrado horizontal */
}
</style>