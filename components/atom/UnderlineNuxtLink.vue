<template>
  <NuxtLink :to="link">
    <span
      class="flex items-center gap-1 text-lg font-medium tracking-wider underline"
      :class="[textClass]"
    >
      {{ text }}
      <NuxtIcon v-if="showIcon" :name="icon" class="text-sm font-semibold" />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'material-symbols:arrow-forward',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  textClass: {
    type: String,
    default: '',
  },
});
</script>
