<template>
  <Select defaultValue="test">
    <SelectTrigger
      class="h-10 w-full rounded-none border-primary-black bg-white text-base text-primary-black focus:!ring-0 focus-visible:!ring-0 md:max-w-[250px] xl:max-w-[292px]"
    >
      <SelectValue class="text-primary-black" />
    </SelectTrigger>
    <SelectContent class="rounded-none border-primary-black">
      <SelectGroup>
        <SelectItem value="test">test</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
/** UI */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
</script>
