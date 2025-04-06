<template>
  <div class="flex flex-wrap gap-2">
    <Badge
      v-for="filter in filterTags"
      variant="outline"
      class="flex h-min cursor-pointer flex-row gap-2 rounded-none border-primary bg-white px-3 text-sm text-primary hover:bg-secondary"
      @click="filter.function"
    >
      {{ filter.name }}
      <NuxtIcon
        name="material-symbols:close-rounded"
        class="text-base font-bold text-primary"
      />
    </Badge>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { IChosenFilters } from '@/ts/interfaces/ChosenFilters';

const props = defineProps({
  filters: {
    type: Array as PropType<IChosenFilters[]>,
    default: () => [],
  },
});

const emits = defineEmits<{
  (
    e: 'remove-chose-from-filter',
    {
      idFilter,
      idChoice,
    }: {
      idFilter: string;
      idChoice: string;
    },
  ): void;
  (e: 'clear-filter'): void;
}>();

const filterTags = computed(() => {
  return props.filters.reduce(
    (acc, filter) => {
      filter.optionsChosen.forEach((option) => {
        acc.push({
          name: option.name,
          function: () =>
            emits('remove-chose-from-filter', {
              idFilter: filter.categoryId,
              idChoice: option.filterId,
            }),
        });
      });
      return acc;
    },
    [
      {
        name: 'Wyczyść wszytsko',
        function: () => emits('clear-filter'),
      },
    ],
  );
});
</script>
