<template>
  <div
    class="md:gap6 container mt-6 flex flex-col gap-4 px-4 md:mt-8 md:gap-10 md:px-8"
  >
    <div>
      <AtomTitleElementSection text="O nas" class="!mb-4" />
      <p>{{ ABOUT_US_TEXT }}</p>
    </div>

    <div class="flex flex-col md:flex-row">
      <div
        class="w-full rounded-t bg-primary-black p-4 text-white md:w-1/2 md:rounded-s md:px-10 md:py-20 xl:w-1/3"
      >
        <MoleculeCompanyInformation class="z-50" />
      </div>
      <div
        class="w-full rounded-b bg-primary p-4 md:w-1/2 md:rounded-e md:px-10 md:py-20 xl:w-2/3 xl:px-20"
      >
        <OrganismContactForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
