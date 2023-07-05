import {
  LABEL_SHOW_LESS,
  LABEL_SHOW_MORE,
  RESPONSE_ERROR,
  RESPONSE_OK,
  TASKS_PER_PAGE
} from 'utils/constants';

export const getDate = () => {
  return new Date().toLocaleDateString('en-GB').replace(/\//g, '.');
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

export const paginationLabel = (tasks, currentPage) => {
  const indexOfLastTask = currentPage * TASKS_PER_PAGE;
  if (tasks.length < indexOfLastTask) return LABEL_SHOW_LESS;
  return LABEL_SHOW_MORE;
};
