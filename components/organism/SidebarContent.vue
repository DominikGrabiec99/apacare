<template>
  <Sheet>
    <SheetTrigger class="cursor-pointer text-primary-black underline">
      {{ openButtonText }}
    </SheetTrigger>
    <SheetContent class="w-full overflow-y-auto sm:max-w-full md:max-w-[600px]">
      <SheetHeader class="text-left">
        <SheetTitle class="mt-4 text-2xl font-bold text-primary-black">
          {{ sidebarTitle }}
        </SheetTitle>
        <SheetDescription>
          <div v-html="sidebarContent" />
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
/** UI */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

defineProps({
  openButtonText: {
    type: String,
    default: '',
  },
  sidebarTitle: {
    type: String,
    default: '',
  },
  sidebarContent: {
    type: String,
    default: '',
  },
});
</script>
