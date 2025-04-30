import * as yup from 'yup';

export const message = yup
  .string()
  .nullable()
  .label('Wiadomość')
  .required('Pole jest wymagane.')
  .trim();

export default message;
