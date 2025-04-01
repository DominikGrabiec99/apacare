<template>
  <div class="flex flex-row items-center gap-2">
    <Checkbox
      v-model="model"
      :id="id"
      :disabled="disabled"
      class="size-5 rounded border-primary-black"
    />
    <label
      :for="id"
      class="cursor-pointer text-base font-medium leading-none text-primary-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {{ text }}
    </label>
  </div>
</template>

<script setup lang="ts">
/** UI */
import { Checkbox } from '@/components/ui/checkbox';

const model = defineModel<boolean>();

defineProps({
  id: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
