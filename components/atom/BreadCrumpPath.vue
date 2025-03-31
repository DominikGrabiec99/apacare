<template>
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <template v-for="(path, index) in paths" :key="index">
            <BreadcrumbLink :href="path.link" class="flex items-center gap-1">
              <NuxtIcon
                v-if="path.icon"
                :name="path.icon"
                class="whitespace-nowrap text-sm font-semibold"
              />
              {{ path.text }}
            </BreadcrumbLink>
            <BreadcrumbSeparator v-if="index !== paths.length - 1" />
          </template>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
/** UI */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

/** INTERFACES */
import type { ICurrentResourcePath } from '@/ts/interfaces/CurrentResourcePath';

defineProps({
  paths: {
    type: Array as PropType<ICurrentResourcePath[]>,
    default: () => [],
  },
});
</script>
