<template>
  <div class="grid grid-cols-12 gap-4">
    <MoleculeProductBox
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="col-span-12 md:col-span-6 xl:col-span-4"
    />
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IProduct } from '@/schema';

/** COMPOSABLES */
import { useProductInformation } from '@/composables/useProductInformation';

defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    default: [],
  },
});

const {} = useProductInformation();
</script>
