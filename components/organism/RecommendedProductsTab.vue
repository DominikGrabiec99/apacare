<template>
  <div>
    <div class="mb-8 md:mb-10">
      <p class="text-primary-black">
        {{ shortDescription }}
        <OrganismSidebarContent
          open-button-text="Dowiedz się więcej"
          :sidebar-title="sidebarTitle"
          :sidebar-content="description"
        />
      </p>
    </div>
    <OrganismCarouselContent :items="products" showPagination>
      <template #default="{ item }">
        <MoleculeRecommendedProductBox :product="item" />
      </template>
    </OrganismCarouselContent>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IRecommendedProducts } from '@/schema/index';

defineProps({
  products: {
    type: Array as PropType<IRecommendedProducts[]>,
    default: [],
  },
  description: {
    type: String,
    default: '',
  },
  shortDescription: {
    type: String,
    default: '',
  },
  sidebarTitle: {
    type: String,
    default: '',
  },
});
</script>
