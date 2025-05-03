import * as yup from 'yup';
import { numberPattern } from '@/utils/validations/helpers/regexRules';

const phoneNumber = yup
  .string()
  .label('Numer telefonu')
  .notRequired()
  .test(
    'is-valid-phone',
    'Nieprawidłowy numer telefonu.',
    (value) => !value || /^[0-9+\-\s]{7,}$/.test(value),
  )
  .meta({
    allowedInputCharacters: numberPattern,
    minValueLength: 9,
    maxValueLength: 9,
  });

export default phoneNumber;
