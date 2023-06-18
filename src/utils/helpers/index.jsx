import dayjs from 'dayjs';
import * as DOMPurify from 'dompurify';
import { RESPONSE_ERROR, RESPONSE_OK } from 'utils/constants';

export const getDate = () => {
  return dayjs().format('DD.MM.YYYY');
};

export const sanitize = (text) => {
  return DOMPurify.sanitize(text);
};

export const validate = (text) => {
  const sanitizedText = sanitize(text);

  if (sanitizedText === '' || !sanitizedText) {
    return { status: RESPONSE_ERROR, message: 'Please enter a valid description' };
  }

  return { status: RESPONSE_OK, text: sanitizedText };
};
