<template>
  <div
    class="mb-8 flex flex-col md:mb-10 md:flex-row md:items-center md:justify-between"
  >
    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
      {{ text }}
    </h3>
    <MoleculeUnderlineNuxtLink
      v-if="link"
      :link="link"
      :text="linkText"
      text-class="font-medium !text-sm md:!text-base flex items-center"
      showIcon
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
});
</script>
