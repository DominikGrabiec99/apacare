<template>
  <Accordion
    type="single"
    collapsible
    :default-value="
      clinicalTrial?.isDefaultOpen ? String(clinicalTrial?.id) : ''
    "
  >
    <AccordionItem :value="String(clinicalTrial?.id) || ''">
      <AccordionTrigger>
        <h3 class="text-left text-xl font-bold text-primary-black">
          {{ clinicalTrial.title }}
        </h3>
      </AccordionTrigger>
      <AccordionContent class="flex flex-col gap-3">
        <div class="flex flex-col gap-4">
          <div v-if="clinicalTrial?.description?.length">
            <h5 class="text-lg font-semibold text-primary-black">
              {{ descriptionTitle }}
            </h5>
            <div class="mt-1 flex flex-col gap-2">
              <p
                v-for="(description, idx) in clinicalTrial?.description"
                :key="idx"
                class="text-base text-primary-black"
              >
                {{ description }}
              </p>
            </div>
          </div>

          <div
            v-if="clinicalTrial?.results?.length"
            class="flex flex-col gap-1"
          >
            <h5 class="text-lg font-semibold text-primary-black">Wyniki:</h5>
            <div class="flex flex-col gap-2 md:flex-row md:gap-5">
              <img
                v-if="clinicalTrial?.img"
                alt="wyniki badań"
                class="shrink-0 md:w-1/3"
                :src="clinicalTrial.img"
              />
              <ol
                type="1"
                class="ml-6 flex list-decimal flex-col gap-1 marker:font-bold"
              >
                <li
                  v-for="(result, idx) in clinicalTrial?.results"
                  :key="idx"
                  class="text-base text-primary-black"
                >
                  {{ result }}
                </li>
              </ol>
            </div>
          </div>

          <div v-if="clinicalTrial?.references?.length">
            <h5 class="text-base font-semibold text-primary-black">
              Referencje:
            </h5>
            <div class="mt-1 flex flex-col gap-2">
              <p
                v-for="(reference, idx) in clinicalTrial?.references"
                :key="idx"
                class="text-sm text-primary-black"
              >
                {{ reference }}
              </p>
            </div>
          </div>

          <template v-if="clinicalTrial?.analysis?.length">
            <div v-for="(analysis, idx) in clinicalTrial?.analysis" :key="idx">
              <h5 class="text-base font-semibold text-primary-black">
                {{ analysis.title }}
              </h5>
              <div class="mt-1 flex flex-col gap-2">
                {{ analysis.text }}
              </div>
              <div
                v-if="analysis?.images?.length"
                class="mt-2 flex flex-col flex-wrap gap-4 md:flex-row md:gap-6"
              >
                <img
                  v-for="(img, idx) in analysis.images"
                  :key="idx"
                  :src="img"
                  alt="wynik analizy"
                />
              </div>
            </div>
          </template>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { ClinicalTrials } from '@/schema/index';

const props = defineProps({
  clinicalTrial: {
    type: Object as PropType<ClinicalTrials>,
    default: () => ({}),
  },
});

const descriptionTitle = computed(() =>
  props.clinicalTrial?.description?.length > 1
    ? 'Opis badań:'
    : 'Opis badania:',
);
</script>
