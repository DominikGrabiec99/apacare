<template>
  <div>
    <p class="text-primary-black" :class="[textClass]" v-if="isExpanded">
      {{ text }}
    </p>
    <p class="text-primary-black" :class="[textClass]" v-else>
      {{ truncatedText }}...
    </p>
    <Button
      variant="ghost"
      class="inline rounded p-0 text-primary-black"
      @click="toggleText"
    >
      {{ isExpanded ? 'Zwiń' : 'Rozwiń' }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  textClass: {
    type: String,
    default: '',
  },
  truncateLength: {
    type: Number,
    default: 50,
  },
});

const isExpanded = ref(false);

const truncatedText = computed(() =>
  props.text.substring(0, props.truncateLength),
);

const toggleText = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
