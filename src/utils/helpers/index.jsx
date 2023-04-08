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
