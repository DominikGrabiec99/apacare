<template>
  <MoleculeCompanyRegulations
    title="Warunki Ogólne Korzystania z Serwisu Internetowego - Firma Kodent spółka cywilna"
    last-update="17.07.2025 r."
    :sections="GENERAL_TERMS_AND_CONDITIONS"
  />
</template>

<script setup lang="ts">
import GENERAL_TERMS_AND_CONDITIONS from '@/constants/generalTermsAndConditions';

useSeoMeta({
  title: 'Warunki ogólne - Kodent ',
  ogTitle: 'Warunki ogólne - Kodent ',
  description: 'Zapoznaj się z warunkami ogólnymi firmy Kodent.',
  ogDescription: 'Zapoznaj się z warunkami ogólnymi firmy Kodent.',
});
</script>
