<template>
  <NuxtLink :to="link">
    <div
      class="relative inline-flex items-center gap-[6px] overflow-hidden text-lg font-medium"
      :class="[textClass]"
    >
      <AtomUnderlineText :text="text" :text-class="textClass" />

      <NuxtIcon
        v-if="showIcon"
        :name="icon"
        :class="[iconClass]"
        class="whitespace-nowrap text-sm font-semibold"
      />
    </div>
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
  iconClass: {
    type: String,
    default: '',
  },
});
</script>
