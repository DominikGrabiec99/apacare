<template>
  <div>
    <AtomTitleElementSection
      text="Zalety naszych produktów"
      link="/badania"
      linkText="Sprawdź badania"
    />
    <div>
      <OrganismCarouselContent :items="SALES_PRODUCTS_ADVANTAGES">
        <template #default="{ item }">
          <MoleculeSalesProductAdvantage
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
          />
        </template>
      </OrganismCarouselContent>
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { SALES_PRODUCTS_ADVANTAGES } from '@/constants/salesProductsAdvantages';
</script>
