<template>
  <div
    class="tham tham-e-squeeze tham-w-8 hover:!opacity-100"
    :class="{ 'tham-active': isHamburgerOpen }"
    @click="emit('toggleHamburgerMenu')"
  >
    <div class="tham-box">
      <div class="tham-inner !border-white !bg-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isHamburgerOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggleHamburgerMenu']);
</script>
