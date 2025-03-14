<template>
  <div>
    <h3 class="text-2xl font-bold md:text-4xl">Najpopularniesze produkty</h3>
    <div class="mt-8">
      <Tabs default-value="apaCare">
        <TabsList class="mb-6 h-12 w-full md:w-auto">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.id"
            :value="tab.id"
            class="text-md h-full w-1/2 px-6 font-medium data-[state=active]:bg-primary data-[state=active]:text-white md:w-auto md:min-w-60"
          >
            {{ tab.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="apaCare">
          <OrganismCarouselProducts :products="apaCareProducts" />
        </TabsContent>
        <TabsContent value="oraLactin">
          <OrganismCarouselProducts :products="oraLactinProducts" />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
/** UI */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/** INTERFACES */
import type { IRecommendedProducts } from '@/ts/interfaces/RecommendedProducts';

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
