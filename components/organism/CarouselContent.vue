<template>
  <Carousel class="w-full">
    <CarouselContent class="w-full">
      <slot />
    </CarouselContent>
    <CarouselPrevious class="hidden" />
    <CarouselNext class="hidden" />
  </Carousel>
</template>
