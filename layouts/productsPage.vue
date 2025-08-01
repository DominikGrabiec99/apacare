<template>
  <div class="flex min-h-screen flex-col bg-secondary">
    <OrganismMenu />
    <div class="flex-1">
      <slot />
    </div>
    <MoleculeFooter class="mt-10 !bg-white md:mt-16" />
  </div>
</template>
