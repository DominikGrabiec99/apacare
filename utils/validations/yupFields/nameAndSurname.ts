import * as yup from 'yup';
import { letterWithCharts } from '@/utils/validations/helpers/regexRules';

const surname = yup
  .string()
  .nullable()
  .label('Imię i nazwisko')
  .min(3, 'Imię i nazwisko jest za krótkie.')
  .max(120, 'Imię i nazwisko jest za długie.')
  .required('Imię i nazwisko jest wymagane.')
  .trim()
  .matches(
    letterWithCharts,
    'Imię i nazwisko nie może zawierać cyfr ani znaków specjalnych.',
  )
  .meta({
    allowedInputCharacters: letterWithCharts,
    minValueLength: 3,
    maxValueLength: 120,
  });

export default surname;
