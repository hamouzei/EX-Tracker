import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Toast.module.css';

const Toast = ({ message, type = 'info', duration = 3000, onClose, id }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [id, duration, onClose]);

  const toastStyle = {
    info: { backgroundColor: '#3b82f6', color: 'white' },
    success: { backgroundColor: '#10b981', color: 'white' },
    warning: { backgroundColor: '#f59e0b', color: 'white' },
    error: { backgroundColor: '#ef4444', color: 'white' },
  };

  return (
    <div 
      className={style.toast}
      style={toastStyle[type]}
      onClick={() => onClose(id)}
    >
      <span className={style.message}>{message}</span>
      <button className={style.closeButton} onClick={(e) => { e.stopPropagation(); onClose(id); }}>
        ×
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Toast;