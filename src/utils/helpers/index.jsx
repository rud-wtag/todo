import { RESPONSE_ERROR, RESPONSE_OK } from 'utils/constants';

export const getFormattedDate = (date) => {
  return date.toLocaleDateString('en-GB').replace(/\//g, '.');
};

export const daysBetweenDate = (completedAt, createdAt) => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const diffDays = Math.ceil((completedAt - createdAt) / DAY);
  return diffDays == 1 ? '1 day' : `${diffDays} days`;
};

export const sanitize = (text) => {
  return text.trim().replaceAll(/<\/?[^>]+(>|$)/gi, '');
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
