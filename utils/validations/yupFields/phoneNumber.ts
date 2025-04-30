import * as yup from 'yup';
import { numberPattern } from '@/utils/validations/helpers/regexRules';

const phoneNumber = yup
  .string()
  .label('Numer telefonu')
  .matches(/^[0-9+\-\s]{7,}$/, 'Nieprawidłowy numer telefonu.')
  .required('Numer telefonu jest wymagany.')
  .meta({
    allowedInputCharacters: numberPattern,
    minValueLength: 9,
    maxValueLength: 9,
  });

export default phoneNumber;
