<template>
  <div class="flex flex-col">
    <Label :for="name" class="text-lg font-medium text-white">
      {{ label }}
      <span class="text-bold text-red-700">
        {{ requireStart }}
      </span>
    </Label>
    <textarea
      v-if="type === 'textarea'"
      v-model="value"
      :id="name"
      :placeholder="placeholder"
      :max="maxValueLength"
      :disabled="isFieldDisabled"
      class="block w-full rounded-[4px] border-2 border-secondary bg-secondary px-2 py-3 text-base focus:outline-none"
      :class="{
        'border-red-700': error,
        'cursor-default opacity-70': isFieldDisabled,
      }"
      @blur="onBlur"
      @keydown="(event) => checkChar(event)"
    />

    <input
      v-else
      v-model="value"
      :type="type"
      :id="name"
      :placeholder="placeholder"
      :maxlength="maxValueLength"
      :disabled="isFieldDisabled"
      class="block w-full rounded-[4px] border-2 border-secondary bg-secondary px-2 py-3 text-base focus:outline-none"
      :class="{
        'border-red-700': error,
        'cursor-default opacity-70': isFieldDisabled,
      }"
      @blur="onBlur"
      @keydown="(event) => checkChar(event)"
    />

    <span v-if="error" class="text-sm text-red-700">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
/** VEE-VALIDATE */
import { useField } from 'vee-validate';

/** UI */
import { Label } from '@/components/ui/label';

/** UTILS */
import { numberPattern } from '@/utils/validations/helpers/regexRules';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  isRequireStar: {
    type: Boolean,
    default: false,
  },
  isOptional: {
    type: Boolean,
    default: false,
  },
  minValueLength: {
    type: Number,
    default: 0,
  },
  maxValueLength: {
    type: Number,
    default: 99999,
  },
  initialValue: {
    type: String,
    default: '',
  },
  capitalizeInput: {
    type: Boolean,
    default: false,
  },
  isFieldDisabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  allowedInputCharacters: {
    type: RegExp,
    default: undefined,
  },
});

const { value, handleChange, setErrors, validate } = useField<string | number>(
  props.name,
  undefined,
  {
    initialValue: props.initialValue,
    validateOnMount: !!props.initialValue,
    validateOnValueUpdate: false,
  },
);

const requireStart = computed(() => (props.isRequireStar ? '*' : ''));

const onFocus = () => {
  setErrors('');
};

const onBlur = () => {
  validate();
};

const checkChar = (event: KeyboardEvent) => {
  const { key, target } = event;

  const ctrlDown = event.ctrlKey || event.metaKey;

  if (ctrlDown && ['z', 'c', 'v', 'x', 'a'].includes(key)) {
    return;
  }

  const defaultAllowKey = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Backspace',
    'Delete',
    'Tab',
    'Shift',
    'Control',
  ];

  if (defaultAllowKey.includes(key)) {
    return;
  }

  let value = String((target as HTMLInputElement).value).trim();

  if (props.type === 'tel') {
    value = value.replaceAll(' ', '');
  }

  const isNumber = new RegExp(numberPattern).test(key);

  if (props.type === 'number' && !isNumber) {
    event.preventDefault();
  }

  if (
    props.allowedInputCharacters &&
    !new RegExp(props.allowedInputCharacters).test(key)
  ) {
    event.preventDefault();
  }
};
</script>
