<template>
  <div class="w-full">
    <div class="hidden w-full flex-col gap-3 md:flex">
      <template v-if="filters?.length">
        <MoleculeFilter
          v-for="(filter, index) in filters"
          :key="filter.id"
          v-model="filters[index]"
          :disabled="disabled"
          :hide-border-bottom="index === filters.length - 1"
        />
      </template>
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

      <template v-if="filters?.length">
        <MoleculeFilter
          v-for="(filter, index) in filters"
          :key="filter.id"
          v-model="filters[index]"
          :disabled="disabled"
          :hide-border-bottom="index === filters.length - 1"
        />
      </template>
    </OrganismSidebarContent>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const filters = defineModel<IFiltersProducts[]>();
</script>
