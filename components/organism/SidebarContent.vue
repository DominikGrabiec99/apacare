<template>
  <Sheet>
    <SheetTrigger
      class="cursor-pointer"
      :class="[buttonClass]"
      :disabled="disabled"
    >
      <slot name="button">
        <AtomUnderlineText :text="openButtonText" text-class="!text-base" />
      </slot>
    </SheetTrigger>
    <SheetContent class="w-full overflow-y-auto sm:max-w-full md:max-w-[600px]">
      <SheetHeader class="text-left">
        <SheetTitle class="mt-4 text-2xl font-bold text-primary-black">
          {{ sidebarTitle }}
        </SheetTitle>
        <SheetDescription>
          <slot>
            <div v-html="sidebarContent" />
          </slot>
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
  buttonClass: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
