<template>
  <div class="flex flex-col gap-3">
    <template v-if="filters?.length">
      <MoleculeFilter
        v-for="(filter, index) in filters"
        :key="filter.id"
        v-model="filters[index]"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';

const filters = defineModel<IFiltersProducts[]>();
</script>
