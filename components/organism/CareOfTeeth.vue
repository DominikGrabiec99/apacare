<template>
  <div>
    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
      Dbaj o swoje zęby
    </h3>
    <div class="mt-8">
      <OrganismCarouselContent class="md:hidden">
        <CarouselItem
          v-for="(item, idx) in CARE_OF_TEETH"
          :key="idx"
          class="basis-full"
        >
          <MoleculeCareOfTooth
            :photo="item.photo"
            :link="item.link"
            :text="item.text"
            :title="item.title"
          />
        </CarouselItem>
      </OrganismCarouselContent>
    </div>

    <OrganismCareOfToothDesktop class="hidden md:flex" :items="CARE_OF_TEETH" />
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { CARE_OF_TEETH } from '@/constants/careOfTeeth';
</script>
