<template>
  <img
    class="transform transition-transform duration-300 ease-in-out hover:scale-105"
    :src="photo"
    :alt="name"
  />
</template>

<script setup lang="ts">
defineProps({
  photo: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

const runtimeConfig = useRuntimeConfig();
</script>
