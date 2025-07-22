<template>
  <section class="privacy-policy mx-auto mt-10 flex max-w-4xl flex-col gap-10">
    <h1 class="mb-6 text-3xl font-bold">
      {{ title }}
    </h1>

    <article v-for="(section, idx) in sections" :key="idx">
      <h3 class="mb-4 text-2xl font-semibold">{{ section.title }}</h3>
      <div v-html="section.content" class="space-y-4"></div>
    </article>

    <p class="text-sm text-gray-600">
      Data ostatniej aktualizacji: {{ lastUpdate }}.
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  sections: {
    type: Array as PropType<{ title: string; content: string }[]>,
    default: () => [],
  },
  lastUpdate: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
:deep() {
  ul,
  ol {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
}
</style>
