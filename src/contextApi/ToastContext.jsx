import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const ToastContext = createContext();

const toastReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.toast]
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.id)
      };
    case 'CLEAR_TOASTS':
      return {
        ...state,
        toasts: []
      };
    default:
      return state;
  }
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const addToast = (message, type = 'info', duration = 3000) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    dispatch({
      type: 'ADD_TOAST',
      toast: { id, message, type, duration }
    });
    return id;
  };

  const removeToast = (id) => {
    dispatch({
      type: 'REMOVE_TOAST',
      id
    });
  };

  const clearToasts = () => {
    dispatch({
      type: 'CLEAR_TOASTS'
    });
  };

  return (
    <ToastContext.Provider value={{ toasts: state.toasts, addToast, removeToast, clearToasts }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ToastProvider, useToast };