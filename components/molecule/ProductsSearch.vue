<template>
  <div
    class="relative h-10 w-full items-center md:max-w-[250px] xl:max-w-[292px]"
  >
    <Input
      v-model="localValue"
      id="search"
      type="text"
      placeholder="Znajdz produkt"
      class="h-10 rounded-none border-primary-black bg-white pr-10 text-base focus-visible:!ring-0"
    />
    <span
      class="absolute inset-y-0 end-0 flex items-center justify-center px-2"
    >
      <Search class="size-6 text-muted-foreground text-primary-black" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { watchDebounced } from '@vueuse/core';

/** UI */
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';

const model = defineModel<string>();

const localValue = ref<string | number | undefined>();

watchDebounced(
  localValue,
  () => {
    model.value = String(localValue.value || '');
  },
  { debounce: 800, maxWait: 1200 },
);
</script>
