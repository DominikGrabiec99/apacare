<template>
  <div class="w-full">
    <div v-show="filters?.length" class="hidden w-full flex-col gap-3 md:flex">
      <MoleculeFilter
        v-for="(filter, index) in filters"
        :key="filter.id"
        :model-value="filter"
        @update:modelValue="updateFilter($event, index)"
        :disabled="disabled"
        :hide-border-bottom="index === filters.length - 1"
      />
    </div>
    <OrganismSidebarContent
      :disabled="disabled"
      sidebar-title="Filtruj"
      button-class="w-full md:hidden"
    >
      <template #button>
        <Button
          :disabled="disabled"
          variant="outline"
          class="w-full rounded-none border-primary px-4 text-base font-semibold text-primary hover:text-primary md:hidden"
        >
          Filtruj
        </Button>
      </template>
      <div v-show="filters?.length">
        <MoleculeFilter
          v-for="(filter, index) in filters"
          :key="filter.id"
          :model-value="filter"
          @update:modelValue="updateFilter($event, index)"
          :disabled="disabled"
          :hide-border-bottom="index === filters.length - 1"
        />
      </div>
    </OrganismSidebarContent>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';

/** UI */
import { Button } from '@/components/ui/button';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const filters = defineModel<IFiltersProducts[]>({ default: () => [] });

const updateFilter = (value: any, index: number) => {
  filters[index] = value;
};
</script>
