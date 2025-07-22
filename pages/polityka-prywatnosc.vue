<template>
  <MoleculeCompanyRegulations
    title="Polityka Prywatności Strony Internetowej Firmy Kodent spółka cywilna"
    last-update="17.07.2025 r."
    :sections="PRIVATE_POLICY"
  />
</template>

<script setup lang="ts">
import PRIVATE_POLICY from '@/constants/privacyPolicy';

useSeoMeta({
  title: 'Polityka prywatności - Kodent ',
  ogTitle: 'Polityka prywatności - Kodent ',
  description: 'Zapoznaj się z polityką prywatności firmy Kodent.',
  ogDescription: 'Zapoznaj się z polityką prywatności firmy Kodent.',
});
</script>
