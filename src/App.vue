<template>
  <div class="hello">
    <h2>Hello Vue 3 Lib!</h2>
    <div>counter: {{ counter }}</div>
    <button @click="() => counter++">inc++</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, version } from "vue";

const counter = ref(0);

onMounted(() => {
  console.log("mounted: ", version);
});
</script>

<style scoped>
.hello {
  background: rgb(48, 48, 48);
  color: pink;
  padding: 3px 5px;
  border-radius: 5px;
}
</style>
