import * as yup from 'yup';
import { onlyLetter } from '@/utils/validations/helpers/regexRules';

const name = yup
  .string()
  .nullable()
  .label('Imię')
  .min(3, 'Imię jest za krótkie.')
  .max(120, 'Imię jest za długie.')
  .required('Imię jest wymagane.')
  .trim()
  .matches(onlyLetter, 'Imię nie może zawierać cyfr ani znaków specjalnych.')
  .meta({
    allowedInputCharacters: onlyLetter,
    minValueLength: 3,
    maxValueLength: 120,
  });

export default name;
