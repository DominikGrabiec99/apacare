<template>
  <div
    class="container mt-6 flex flex-col gap-6 px-4 md:mt-8 md:gap-12 md:px-8"
  >
    <AtomTitleElementSection class="!mb-0" text="Sprawdź nasze badania" />
    <div class="flex flex-col gap-1">
      <OrganismClinicalTrial
        v-for="clinicalTrial in clinicalTrials"
        :key="clinicalTrial.id"
        :clinical-trial="clinicalTrial"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { ClinicalTrials } from '@/schema/index';

const { data: clinicalTrials } = await useAsyncData<ClinicalTrials[]>(
  'clinicalTrials',
  () =>
    $fetch('/api/getClinicalTrials', {
      method: 'POST',
    }),
);
</script>
