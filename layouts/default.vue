<template>
  <div class="flex min-h-screen flex-col">
    <OrganismMenu />
    <div class="flex-1">
      <slot />
    </div>
    <MoleculeFooter class="mt-10 md:mt-16" />
  </div>
</template>
