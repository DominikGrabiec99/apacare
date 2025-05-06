<template>
  <div
    class="relative min-h-[650px] overflow-hidden bg-cover bg-center pt-16 md:flex md:min-h-[400px] md:items-center md:bg-[url(/images/bg-main-section.webp)] md:pt-0 md:before:absolute md:before:inset-0 md:before:bg-black md:before:bg-opacity-20 xl:min-h-[620px]"
  >
    <div
      class="container flex h-full flex-col gap-5 px-6 md:h-min md:flex-row-reverse md:items-center md:justify-end md:gap-12 md:px-14 lg:gap-36"
    >
      <div
        class="relative flex h-[22rem-16px] flex-shrink-0 items-center justify-end overflow-hidden pt-1 md:hidden md:h-[30rem] md:px-5"
      >
        <div
          class="relative flex size-[calc(20rem)] -rotate-[25deg] items-center justify-center rounded-full border-2 border-solid border-gray-900 border-t-transparent before:absolute before:left-11 before:top-10 before:z-10 before:size-2 before:rounded-full before:bg-gray-900 after:absolute after:right-11 after:top-10 after:z-10 after:size-2 after:rounded-full after:bg-gray-900 md:size-[28rem] md:before:left-[60px] md:before:top-[60px] md:after:right-[60px] md:after:top-[60px]"
        >
          <div
            class="relative size-72 rotate-[25deg] overflow-hidden rounded-full border-8 border-solid border-primary shadow-lg transition-transform duration-300 ease-in-out hover:scale-[103%] md:size-[calc(400px-20px)] md:border-[12px]"
          >
            <img
              src="/images/header-main-page.webp"
              alt="Uśmiechnięta dziewczyna"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="relative h-full md:h-min">
        <div class="pt-12 md:pt-0">
          <div class="flex flex-col gap-2">
            <h1
              class="text-5xl font-extrabold leading-tight text-primary-black md:text-white md:[text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]"
            >
              Dbaj o swój
            </h1>
            <h2
              class="text-3xl font-semibold text-gray-800 md:text-4xl md:text-white md:[text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]"
            >
              codzienny uśmiech
            </h2>
          </div>
          <div class="mt-6 flex max-w-80 flex-col gap-6 md:max-w-96">
            <p
              class="text-lg font-medium text-gray-700 md:text-white md:[text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]"
            >
              Sprawdź nasze produkty, które zapewniają naturalnie gładkie,
              zdrowe i lśniące zęby!
            </p>
            <MoleculeUnderlineNuxtLink
              link="/produkty"
              text="Sprawdź"
              text-class="font-semibold md:text-white md:before:bg-white md:after:bg-white md:[text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]"
              icon-class="md:text-white md:[text-shadow:_0_4px_8px_rgba(0,0,0,0.7)]"
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
      class="absolute left-12 top-96 text-[58px] text-primary opacity-10 md:hidden"
    />
  </div>
</template>
