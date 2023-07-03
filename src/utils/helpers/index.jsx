import dayjs from 'dayjs';
import * as DOMPurify from 'dompurify';
import { RESPONSE_ERROR, RESPONSE_OK } from 'utils/constants';

export const getDate = () => {
  return new Date().toLocaleDateString('en-GB').replace(/\//g, '.');
};

export const daysBetweenDate = (date) => {
  const currentDate = dayjs();
  let diffDays = currentDate.diff(date, 'day');
  diffDays = diffDays < 1 ? '1 day' : `${diffDays} days`;
  return diffDays;
};

export const sanitize = (text) => {
  return DOMPurify.sanitize(text);
};

export const validate = (text) => {
  if (text) {
    const sanitized = sanitize(text);

    if (sanitized === '') {
      return { status: RESPONSE_ERROR, message: 'Please enter a valid description' };
    }

    return { status: RESPONSE_OK, text: sanitized };
  }

  return {
    status: RESPONSE_ERROR,
    message: 'can not be empty'
  };
};
