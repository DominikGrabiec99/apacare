<template>
  <div class="flex w-full flex-col items-center gap-4 pb-4">
    <img :src="photo" :alt="title" class="w-full rounded-lg" />
    <h5 class="text-center text-lg font-semibold">{{ title }}</h5>
    <MoleculeUnderlineNuxtLink
      v-if="link"
      :to="link"
      text="Dowiedz się więcej"
      textClass="text-base font-medium"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  photo: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
});
</script>
