import { ERROR, OK } from 'utils/constants';
export const getDate = () => {
  const date = new Date().toLocaleDateString('en-GB').replace(/\//g, '.');
  return date;
};

export const getUid = () => {
  return Date.now();
};
export const sanitize = (text) => {
  return text.trim().replaceAll(/<\/?[^>]+(>|$)/gi, '');
};
export const validate = (text) => {
  if (text) {
    const sanitized = sanitize(text);
    if (sanitized === '') return { status: ERROR, message: 'Please enter a valid description' };
    return { status: OK, text: sanitized };
  }
  return {
    status: ERROR,
    message: 'can not be empty'
  };
};
