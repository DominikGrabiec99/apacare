<template>
  <div
    class="relative min-h-[650px] overflow-hidden pt-16 md:flex md:min-h-[500px] md:items-center md:pt-24"
  >
    <div
      class="container flex h-full flex-col gap-5 px-6 md:h-min md:flex-row-reverse md:items-center md:justify-end md:gap-12 md:px-14 lg:gap-36"
    >
      <div
        class="relative flex h-[22rem-16px] flex-shrink-0 items-center justify-end overflow-hidden pt-1 md:h-[30rem] md:px-5"
      >
        <div
          class="relative flex size-[calc(20rem)] -rotate-[25deg] items-center justify-center rounded-full border-2 border-solid border-gray-900 border-t-transparent before:absolute before:left-11 before:top-10 before:z-10 before:size-2 before:rounded-full before:bg-gray-900 after:absolute after:right-11 after:top-10 after:z-10 after:size-2 after:rounded-full after:bg-gray-900 md:size-[28rem] md:before:left-[60px] md:before:top-[60px] md:after:right-[60px] md:after:top-[60px]"
        >
          <div
            class="relative size-72 rotate-[25deg] overflow-hidden rounded-full border-8 border-solid border-primary shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 md:size-[calc(400px-20px)] md:border-[12px]"
          >
            <img
              src="/images/header-main-page.png"
              alt="Uśmiechnięta dziewczyna"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="relative h-full md:h-min">
        <div class="pt-12">
          <div class="flex flex-col gap-2">
            <h1 class="text-5xl font-extrabold leading-tight text-gray-900">
              Dbaj o swój
            </h1>
            <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
              codzienny uśmiech
            </h2>
          </div>
          <div class="mt-6 flex max-w-80 flex-col gap-6 md:max-w-96">
            <p class="text-lg font-medium text-gray-700">
              Sprawdź nasze produkty, które zapewniają naturalnie gładkie,
              zdrowe i lśniące zęby!
            </p>
            <AtomUnderlineNuxtLink
              link="/produkty"
              text="Sprawdź"
              text-class="font-semibold"
              showIcon
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Tło w kształcie koła -->
    <div
      class="absolute -right-32 bottom-10 size-72 rounded-full bg-primary opacity-10 md:hidden"
    />

    <!-- Ikonki ozdobne -->
    <NuxtIcon
      name="ri:tooth-line"
      class="absolute left-6 top-6 text-[64px] text-primary opacity-10 md:hidden"
    />
    <NuxtIcon
      name="ri:tooth-line"
      class="absolute left-16 top-80 text-[58px] text-primary opacity-10 md:hidden"
    />
  </div>
</template>
