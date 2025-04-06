<template>
  <div
    class="relative h-10 w-full items-center md:max-w-[250px] xl:max-w-[292px]"
  >
    <Input
      v-model="localValue"
      :disabled="disabled"
      id="search"
      type="text"
      placeholder="Znajdz produkt"
      class="h-10 rounded-none border-b border-solid border-transparent !border-b-primary-black !bg-transparent pl-8 pr-0 text-base shadow-none focus-visible:!ring-0"
    />
    <span class="absolute inset-y-0 start-0 flex items-center justify-center">
      <Search
        class="size-6 text-muted-foreground text-primary-black opacity-70"
        :class="{ 'opacity-50': disabled }"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { watchDebounced } from '@vueuse/core';

/** UI */
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';

const model = defineModel<string>();

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const localValue = ref<string | number | undefined>();

watchDebounced(
  localValue,
  () => {
    model.value = String(localValue.value || '');
  },
  { debounce: 800, maxWait: 1200 },
);
</script>
