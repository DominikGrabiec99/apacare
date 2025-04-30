import * as yup from 'yup';

export const surname = yup.string().label('Nazwa firmy').optional();

export default surname;
