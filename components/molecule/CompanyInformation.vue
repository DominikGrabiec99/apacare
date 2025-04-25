<template>
  <div class="flex flex-col gap-4 md:gap-6">
    <div>
      <AtomTitleElementSection text="O nas" class="!mb-4" />
      <p>{{ ABOUT_US_TEXT }}</p>
    </div>

    <div class="flex flex-col gap-2">
      <AtomTitleElementSection text="Kontakt" class="!mb-4" />

      <h5 class="text-xl font-semibold text-primary-black">
        W razie pytań dotyczących produktów oraz możliwości ich zakupu w Polsce
        zapraszamy do kontaktu z nami:
      </h5>

      <p class="text-lg font-semibold text-primary-black">
        Firma Kodent spółka cywilna
      </p>

      <div class="flex flex-col text-primary-black">
        <p>ul. Madalińskiego 20 lok. 29</p>
        <p>02-513 Warszawa</p>
        <p class="flex flex-row flex-wrap gap-1">
          Telefon:
          <a href="tel:+48226354541" class="font-bold" target="_blank">
            22 635 45 41
          </a>
          lub
          <a href="tel:+48601385559" class="font-bold" target="_blank">
            601 38 55 59
          </a>
        </p>
      </div>
      <p class="text-primary-black">
        e-mail:
        <a class="underline" href="mailto:kodent@kodent.com.pl"
          >kodent@kodent.com.pl</a
        >
      </p>

      <div class="text-primary-black">
        <p class="mb-2 text-lg font-semibold">Firma Kodent spółka cywilna</p>
        <p>NIP: 5214099501</p>
      </div>
      <div class="text-primary-black">
        <p class="mb-2 text-lg font-semibold text-primary-black">
          Dane do przelewów
        </p>
        <p>
          Bank:
          <span class="font-bold">mBank</span>
        </p>
        <p>
          Nr konta:
          <span class="font-bold">46 1140 2004 0000 3302 8545 7972</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
