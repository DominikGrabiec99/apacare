<template>
  <div>
    <AtomTitleElementSection text="Masz pytanie?" class="!mb-4" />
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
      <div>
        <NuxtTurnstile v-model="token" class="mt-4" />
        <span v-if="tokeError" class="text-sm text-red-700">
          {{ tokeError }}</span
        >
      </div>
      <Button
        type="submit"
        class="h-10 w-full rounded-[4px] text-lg md:w-[250px]"
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

const token = ref();
const tokeError = ref('');
const isFormSending = ref(false);

const { errors, validate, values } = useForm({
  validationSchema: validationSchemaContactForm,
});

const { fields } = validationSchemaContactForm;
const formFields = createFormFields(fields);

const submitForm = async () => {
  try {
    isFormSending.value = true;

    const formValidate = await validate();
    if (!formValidate.valid) {
      return;
    }

    tokeError.value = '';

    if (!token.value) {
      tokeError.value = 'Musisz potwierdzić że nie jesteś robotem.';
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
</script>
