<template>
  <div
    class="relative h-[700px] overflow-hidden pt-6 md:flex md:h-[450px] md:items-center md:pt-8"
  >
    <div
      class="container flex h-full flex-col gap-3 px-4 md:h-min md:flex-row-reverse md:items-center md:justify-end md:gap-8 md:px-10 lg:gap-28"
    >
      <div
        class="relative flex h-80 flex-shrink-0 items-center justify-end overflow-hidden pt-1 md:h-[26rem] md:px-3"
      >
        <div
          class="before:content-[' '] relative flex size-[calc(18rem+16px)] -rotate-[25deg] items-center justify-center rounded-full border-2 border-solid border-primary-black border-t-transparent before:absolute before:left-10 before:top-10 before:z-10 before:size-2 before:rounded-full before:bg-primary-black after:absolute after:right-10 after:top-10 after:z-10 after:size-2 after:rounded-full after:bg-primary-black md:size-96 md:before:left-[50px] md:before:top-[52px] md:after:right-[50px] md:after:top-[52px]"
        >
          <div
            class="relative size-72 rotate-[25deg] overflow-hidden rounded-full border-8 border-solid border-primary md:size-[calc(384px-20px)] md:border-[10px]"
          >
            <img
              src="/public/images/header-main-page.png"
              alt="uśmiechnięta dziewczyna"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="relative h-full md:h-min">
        <div class="relative top-10">
          <div class="flex flex-col gap-1">
            <h1 class="text-5xl font-bold text-primary">Dbaj o swój</h1>
            <h2 class="text-3xl font-semibold text-primary-black md:text-3xl">
              codzienny uśmiech
            </h2>
          </div>
          <div class="mt-4 flex max-w-72 flex-col gap-6 md:max-w-96">
            <p class="text-md text-xl font-semibold text-primary-black">
              Sprawdź nasze produkty, które zapewniają naturalnie gładkie,
              zdrowe i lśniące zęby!
            </p>
            <NuxtLink to="/produkty">
              <Button class="h-12 px-12" size="lg">
                <span class="text-lg font-medium tracking-wider">Sprawdź</span>
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- bg circle -->
    <div
      class="absolute -right-32 bottom-10 size-64 rounded-full bg-primary opacity-15 md:hidden"
    />
    <div
      class="absolute -bottom-24 -left-24 size-48 rounded-full bg-primary opacity-15 md:hidden"
    />
    <NuxtIcon
      name="ri:tooth-line"
      class="absolute left-5 top-5 text-[60px] text-primary opacity-15 md:hidden"
    />

    <NuxtIcon
      name="ri:tooth-line"
      class="absolute left-14 top-80 text-[54px] text-primary opacity-15 md:hidden"
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>
