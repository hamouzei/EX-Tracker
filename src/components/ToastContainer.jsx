import React from 'react';
import PropTypes from 'prop-types';
import { useToast } from '../contextApi/ToastContext';
import Toast from '../components/Toast';
import style from './ToastContainer.module.css';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className={style.toastContainer}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};

ToastContainer.propTypes = {
  // No props needed for this component
};

export default ToastContainer;