export const getDate = () => {
  const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
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
    if (sanitized === '') return { status: 'error', message: 'Please enter a valid description' };
    return { status: 'ok', text: sanitized };
  } else
    return {
      status: 'error',
      message: 'can not be empty'
    };
};
