<template>
  <div
    class="tham tham-e-squeeze tham-w-8 hover:!opacity-100"
    :class="{ 'tham-active': isHamburgerOpen }"
    @click="toggleHamburgerMenu"
  >
    <div class="tham-box">
      <div class="tham-inner !border-white !bg-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isHamburgerOpen = ref(false);

const toggleHamburgerMenu = () => {
  isHamburgerOpen.value = !isHamburgerOpen.value;
};
</script>
