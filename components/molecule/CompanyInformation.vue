<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <AtomTitleElementSection
        text="Kontakt"
        class="!mb-0"
        textClass="!text-white"
      />

      <p class="text-lg text-white">Firma Kodent spółka cywilna</p>
    </div>

    <div class="flex flex-col gap-4 text-white">
      <AtomInformationBoxWithIcon
        icon-name="material-symbols:call"
        information-title="Telefon"
      >
        <div class="flex flex-row flex-wrap gap-1">
          <a href="tel:+48226354541" target="_blank"> 22 635 45 41 </a>
          lub
          <a href="tel:+48601385559" target="_blank"> 601 38 55 59 </a>
        </div>
      </AtomInformationBoxWithIcon>

      <AtomInformationBoxWithIcon
        icon-name="material-symbols:mail"
        information-title="E-mail"
      >
        <a class="underline" href="mailto:kodent@kodent.com.pl">
          kodent@kodent.com.pl
        </a>
      </AtomInformationBoxWithIcon>

      <AtomInformationBoxWithIcon
        icon-name="solar:map-point-bold"
        information-title="Adres"
      >
        <div>
          <p>ul. Madalińskiego 20 lok. 29</p>
          <p>02-513 Warszawa</p>
        </div>
      </AtomInformationBoxWithIcon>

      <AtomInformationBoxWithIcon
        icon-name="mdi:bank-transfer"
        information-title="Dane do przelewu"
      >
        <div>
          <p>
            Bank:
            <span class="font-bold">mBank</span>
          </p>
          <p>
            Nr konta:
            <span class="font-bold">46 1140 2004 0000 3302 8545 7972</span>
          </p>
        </div>
      </AtomInformationBoxWithIcon>

      <AtomInformationBoxWithIcon
        icon-name="fluent:building-factory-20-filled"
        information-title="Firma"
      >
        <div>
          <p class="mb-2 text-lg font-semibold">Firma Kodent spółka cywilna</p>
          <p>NIP: 5214099501</p>
        </div>
      </AtomInformationBoxWithIcon>
    </div>

    <p class="text-sm text-white">
      W razie pytań dotyczących produktów oraz możliwości ich zakupu w Polsce
      zapraszamy do kontaktu z nami.
    </p>
  </div>
</template>
