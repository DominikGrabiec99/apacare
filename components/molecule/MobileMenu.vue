<template>
  <div class="size-full">
    <div class="flex size-full items-center justify-between">
      <AtomLogo />
      <AtomHamburger @click="toggleMenu" />
    </div>
    <ClientOnly>
      <Teleport to="body">
        <nav
          class="border-b-solid border-b-black-100 duration-400 absolute -top-[100dvh] left-0 z-30 flex h-auto w-full flex-col overflow-auto border-b bg-white px-4 py-2 pt-[64px] shadow-md transition-all ease-in-out lg:hidden"
          :class="{ 'top-0': isMenuOpen }"
        >
          <NuxtLink v-for="link in MENU_LINK" :key="link.id" :to="link.to">
            <div class="flex items-center gap-3 py-2">
              <NuxtIcon :name="link.icon" class="text-primary-black text-xl" />

              <p class="text-primary-black text-xl font-semibold uppercase">
                {{ link.text }}
              </p>
            </div>
          </NuxtLink>
        </nav>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import MENU_LINK from '@/constants/menu';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
