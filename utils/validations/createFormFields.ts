/** UTILS */
import getMaxValueLength from '@/utils/validations/helpers/getMaxValueLength';
import getMinValueLength from '@/utils/validations/helpers/getMinValueLength';

const createFormFields = (fields: any) => {
  return Object.entries(fields).map(([key, value]: any) => {
    let { type } = value;

    type = 'text';

    if (key === 'email') {
      type = 'email';
    }

    if (key === 'message') {
      type = 'textarea';
    }

    if (key === 'phoneNumber') {
      type = 'tel';
    }

    const filed = {
      name: key,
      label: value.spec.label,
      isRequireStar: !value.spec.optional,
      isOptional: value.spec.optional,
      type,
      minValueLength: getMinValueLength(value),
      maxValueLength: getMaxValueLength(value),
      allowedInputCharacters: value.spec?.meta?.allowedInputCharacters,
      capitalizeInput: key === 'email' ? false : true,
    };

    return filed;
  });
};

export default createFormFields;
