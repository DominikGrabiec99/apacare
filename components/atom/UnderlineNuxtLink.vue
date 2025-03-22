<template>
  <NuxtLink :to="link">
    <div
      className="relative inline-flex items-center  overflow-hidden gap-[6px] text-lg font-medium "
      :class="[textClass]"
    >
      <span
        :class="[textClass]"
        class="relative text-lg font-medium text-primary-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-100 before:bg-primary-black before:opacity-100 before:transition-all before:duration-700 before:ease-in-out before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary-black after:transition-all after:delay-300 after:duration-700 after:ease-in-out after:content-[''] hover:before:scale-x-0 hover:before:opacity-0 hover:after:left-0 hover:after:w-full"
      >
        {{ text }}
      </span>
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
