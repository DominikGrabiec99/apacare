<template>
  <div>
    <div class="flex flex-row items-center gap-2" :class="checkboxWrapperClass">
      <Checkbox
        v-model="model"
        :id="id"
        :disabled="disabled"
        class="size-5 rounded border-primary-black"
        :class="checkboxClass"
      />
      <Label
        :for="id"
        class="cursor-pointer text-base font-medium leading-none text-primary-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        :class="labelClass"
      >
        <slot>{{ text }}</slot>
      </Label>
    </div>
    <span v-if="error" class="text-sm text-red-700">{{ error }}</span>
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
  error: {
    type: String,
    default: '',
  },
  checkboxWrapperClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  checkboxClass: {
    type: String,
    default: '',
  },
});
</script>
