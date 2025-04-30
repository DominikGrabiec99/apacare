<template>
  <div class="md:gap6 container mt-6 flex flex-col gap-4 px-4 md:mt-8 md:px-8">
    <div>
      <AtomTitleElementSection text="O nas" class="!mb-4" />
      <p>{{ ABOUT_US_TEXT }}</p>
    </div>
    <OrganismContactForm />
    <MoleculeCompanyInformation />
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
