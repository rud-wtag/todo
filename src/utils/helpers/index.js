import { RESPONSE_ERROR, RESPONSE_OK } from 'utils/constants';

export const getFormattedDate = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const sanitize = (text) => {
  return text.replaceAll(/<\/?[^>]+(>|$)/gi, '').trim();
};

export const validate = (text) => {
  const sanitizedText = sanitize(text);

  if (sanitizedText === '' || !sanitizedText) {
    return { status: RESPONSE_ERROR, message: 'Please enter a valid description' };
  }

  return { status: RESPONSE_OK, text: sanitizedText };
};
