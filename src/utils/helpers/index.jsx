import dayjs from 'dayjs';
import * as DOMPurify from 'dompurify';
import { LABEL_SHOW_LESS, LABEL_SHOW_MORE, RESPONSE_ERROR, RESPONSE_OK } from 'utils/constants';

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

export const paginationLabel = (tasks, currentPage) => {
  const tasksPerPage = 9;
  const indexOfLastTask = currentPage * tasksPerPage;
  if (tasks.length < indexOfLastTask) return LABEL_SHOW_LESS;
  return LABEL_SHOW_MORE;
};
