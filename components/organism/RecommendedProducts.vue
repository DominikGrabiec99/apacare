<template>
  <div>
    <AtomTitleElementSection text="Najpopularaniejsze produkty" />
    <div>
      <Tabs default-value="apaCare">
        <TabsList class="mb-6 h-14 w-full md:w-auto">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.id"
            :value="tab.id"
            class="text-md h-full w-1/2 px-6 font-medium data-[state=active]:bg-primary data-[state=active]:text-white md:w-auto md:min-w-72"
          >
            {{ tab.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="apaCare">
          <OrganismRecommendedProductsTab
            :products="apaCareProducts"
            :description="APA_CARE_DESCRIPTION"
            :short-description="APA_CARE_SHORT_DESCRIPTION"
            sidebar-title="ApaCare - Jak to działa"
          />
        </TabsContent>
        <TabsContent value="oraLactin">
          <OrganismRecommendedProductsTab
            :products="oraLactinProducts"
            :description="ORA_LACTIN_DESCRIPTION"
            :short-description="ORA_LACTIN_SHORT_DESCRIPTION"
            sidebar-title="OraLactin - Jak to działa"
          />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
/** UI */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/** SCHEMA */
import type { IRecommendedProducts } from '@/schema/index';

/** CONSTANTS */
import {
  ORA_LACTIN_SHORT_DESCRIPTION,
  APA_CARE_SHORT_DESCRIPTION,
  APA_CARE_DESCRIPTION,
  ORA_LACTIN_DESCRIPTION,
} from '@/constants/productsMethods';

defineProps({
  apaCareProducts: {
    type: Array as PropType<IRecommendedProducts[]>,
    default: [],
  },
  oraLactinProducts: {
    type: Array as PropType<IRecommendedProducts[]>,
    default: [],
  },
});

const tabs = [
  {
    id: 'apaCare',
    name: 'ApaCare',
  },
  {
    id: 'oraLactin',
    name: 'OraLactin',
  },
];
</script>
