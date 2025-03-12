<template>
  <div class="flex size-full items-center justify-between">
    <AtomLogo />
    <nav class="flex h-full gap-3">
      <NuxtLink
        v-for="link in MENU_LINK"
        :key="link.id"
        :to="link.to"
        class="flex h-full items-center px-5 font-medium"
      >
        <span>{{ link.text }}</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import MENU_LINK from '@/constants/menu';
</script>
