<template>
  <div class="size-full">
    <div class="flex size-full items-center justify-between">
      <AtomLogo />
      <AtomHamburger :isHamburgerOpen="isMenuOpen" @click="toggleMenu" />
    </div>
    <ClientOnly>
      <Teleport to="body">
        <nav
          class="border-b-solid border-b-black-100 duration-400 absolute -top-[100vh] left-0 z-30 flex h-[100vh] w-full flex-col gap-3 overflow-auto border-b bg-white px-4 py-2 pt-[calc(var(--menu-height-mobile)+16px)] shadow-md transition-all ease-in-out lg:hidden"
          :class="{ 'top-0': isMenuOpen }"
        >
          <NuxtLink
            v-for="link in MENU_LINK"
            :key="link.id"
            :to="link.to"
            @click="choseOption"
          >
            <p class="text-xl font-semibold uppercase text-primary-black">
              {{ link.text }}
            </p>
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

const removeOverflowBody = () => {
  document.body.style.overflowY = '';
};

const choseOption = () => {
  isMenuOpen.value = false;
  removeOverflowBody();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    document.body.style.overflowY = 'hidden';
  } else {
    removeOverflowBody();
  }
};
</script>
