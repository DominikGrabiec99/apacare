import * as yup from 'yup';
import { onlyLetter } from '@/utils/validations/helpers/regexRules';

const surname = yup
  .string()
  .nullable()
  .label('Nazwisko')
  .min(3, 'Nazwisko jest za krótkie.')
  .max(120, 'Nazwisko jest za długie.')
  .required('Nazwisko jest wymagane.')
  .trim()
  .matches(
    onlyLetter,
    'Nazwisko nie może zawierać cyfr ani znaków specjalnych.',
  )
  .meta({
    allowedInputCharacters: onlyLetter,
    minValueLength: 3,
    maxValueLength: 120,
  });

export default surname;
