<template>
  <div class="hello">Hello</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("mounted");
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
