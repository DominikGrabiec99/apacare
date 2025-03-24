<template>
  <div>
    <div
      class="overflow-hidden transition-all duration-300"
      :class="isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-32'"
    >
      <p class="text-primary-black" :class="textClass">
        {{ isExpanded ? text : truncatedText + '...' }}
      </p>
    </div>
    <Button variant="ghost" class="inline h-min p-0" @click="toggleText">
      <AtomUnderlineText
        :text="isExpanded ? 'Zwiń' : 'Rozwiń'"
        text-class="text-sm"
      />
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
