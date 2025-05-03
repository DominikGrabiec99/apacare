import { object } from 'yup';

import email from '@/utils/validations/yupFields/email';
import nameAndSurname from '@/utils/validations/yupFields/nameAndSurname';
import companyName from '@/utils/validations/yupFields/companyName';
import message from '@/utils/validations/yupFields/message';
import phoneNumber from '@/utils/validations/yupFields/phoneNumber';

const validationSchemaContactForm = object({
  nameAndSurname,
  companyName,
  phoneNumber,
  email,
  message,
});

export default validationSchemaContactForm;
