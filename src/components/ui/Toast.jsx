// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Toast() {
  const [show, setShow] = useState(false);
  const toast = useSelector((state) => state.todoStates.toast);
  useEffect(() => {
    setShow(toast.message !== null);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [toast]);
  return <>{show && <div className={`toast toast--${toast.type}`}>{toast.message}</div>}</>;
}

export default Toast;
