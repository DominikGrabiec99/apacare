<template>
  <div>
    <AtomTitleElementSection
      text="Masz pytanie? - Oddzwonimy"
      class="!mb-4"
      text-class="!text-white"
    />
    <form class="flex flex-col gap-2" @submit.prevent="submitForm">
      <template
        v-for="field in formFields"
        :key="`contact-form-${field.label}`"
      >
        <MoleculeInputForm
          v-bind="{ ...field, error: errors[field.name] || '' }"
          :is-field-disabled="isFormSending"
        />
      </template>

      <AtomCheckbox
        v-model="acceptPrivatePolicy"
        :disabled="isFormSending"
        :error="privatePolicyError"
        class="mt-4"
        checkbox-wrapper-class="!items-start"
        checkbox-class="border-white"
      >
        <span class="font-medium text-white">
          Oświadczam, że zapoznałem/am się i akceptuję
          <NuxtLink to="/" class="font-bold text-secondary"
            >Politykę prywatności</NuxtLink
          >
          w sprawie przetwarzania moich danych osobowych przez Administratora
          danych osobowych, którym jest Kodent. Dane będą przetwarzane wyłącznie
          w celach obsługi zapytań klienta. Podanie danych jest dobrowolne ale
          niezbędne do realizacji ww. celu.
        </span>
      </AtomCheckbox>
      <div>
        <NuxtTurnstile v-model="token" class="mt-4" />
        <span v-if="tokeError" class="text-sm text-red-700">
          {{ tokeError }}</span
        >
      </div>
      <Button
        type="submit"
        variant="secondary"
        class="h-12 w-full rounded-full text-lg font-medium text-primary-black md:w-[150px]"
        :disabled="isFormSending"
      >
        Wyślij
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';

/** UTILS */
import validationSchemaContactForm from '@/utils/validations/validationSchemaForms/validationSchemaContactForm';
import createFormFields from '@/utils/validations/createFormFields';

const PRIVATE_POLICY_ERROR_TEXT = 'Musisz wyrazić zgodę.';
const TOKEN_ERROR_TEXT = 'Musisz potwierdzić że nie jesteś robotem.';

const token = ref();
const tokeError = ref('');
const isFormSending = ref(false);
const acceptPrivatePolicy = ref(false);
const privatePolicyError = ref('');

const { errors, validate, values } = useForm({
  validationSchema: validationSchemaContactForm,
});

const { fields } = validationSchemaContactForm;
const formFields = createFormFields(fields);

const submitForm = async () => {
  try {
    isFormSending.value = true;

    const formValidate = await validate();
    if (!acceptPrivatePolicy.value) {
      privatePolicyError.value = PRIVATE_POLICY_ERROR_TEXT;
    }
    if (!formValidate.valid || !acceptPrivatePolicy.value) {
      return;
    }

    tokeError.value = '';

    if (!token.value) {
      tokeError.value = TOKEN_ERROR_TEXT;
      return;
    }

    const formData = {
      ...values,
      turnstileToken: token.value,
    };

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(`Cam't send email, result: ${result}`);
    }

    // wyczysc formularz
    // daj infromacje ze sie udało
  } catch (error) {
    console.log('submitForm error: ', error);
  } finally {
    isFormSending.value = false;
  }
};

watch(
  () => acceptPrivatePolicy.value,
  () => {
    if (acceptPrivatePolicy.value) {
      privatePolicyError.value = '';
    }
  },
);
</script>
