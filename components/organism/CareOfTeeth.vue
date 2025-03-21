<template>
  <div>
    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
      Dbaj o swoje zęby
    </h3>
    <div class="mt-8">
      <OrganismCarouselContent class="md:hidden" :items="CARE_OF_TEETH">
        <template #default="{ item }">
          <MoleculeCareOfTooth
            :photo="item.photo"
            :link="item.link"
            :text="item.text"
            :title="item.title"
          />
        </template>
      </OrganismCarouselContent>
    </div>

    <OrganismCareOfToothDesktop class="hidden md:flex" :items="CARE_OF_TEETH" />
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { CARE_OF_TEETH } from '@/constants/careOfTeeth';
</script>
