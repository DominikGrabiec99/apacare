<template>
  <div class="flex flex-col gap-4 md:gap-6">
    <h3 class="text-left text-2xl font-bold">Jak używać {{ productName }}?</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(method, idx) in methodOfUse"
        :key="idx"
        class="flex flex-row gap-3 md:items-center"
        :class="{ 'md:!items-start': method.array?.length }"
      >
        <div
          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white"
        >
          {{ idx + 1 }}
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-primary-black">{{ method.text }}</p>
          <div v-if="method.array?.length">
            <ul class="ml-10 flex list-disc flex-col gap-1">
              <li v-for="(el, idx) in method.array" :key="idx">{{ el }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p class="text-sm text-primary-black">{{ textAfter }}</p>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IMethodOfUse } from '@/schema/index';

defineProps({
  methodOfUse: {
    type: Array as PropType<IMethodOfUse[]>,
    default: () => [],
  },
  textAfter: {
    type: String,
    default: '',
  },
  productName: {
    type: String,
    default: '',
  },
});
</script>
