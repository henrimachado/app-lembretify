//React imports
import React, { useState, createContext, useContext } from 'react';

//Component imports
import CustomToast from './CustomToast.jsx';


const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

function ToastWrapper({ children }) {
  const [currentToast, setCurrentToast] = useState(null);

  const showToast = (message, type) => {
    const newToast = {
      id: new Date().getTime(),
      message,
      type,
    };

    setCurrentToast(newToast);

    setTimeout(() => {
      hideToast(newToast.id);
    }, 2500);
  };

  const hideToast = (toastId) => {
    if (currentToast && currentToast.id === toastId) {
        setCurrentToast(null);
      };
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {currentToast && (
        <CustomToast
          key={currentToast.id}
          message={currentToast.message}
          type={currentToast.type}
          onClose={() => hideToast(currentToast.id)}
        />
      )}
    </ToastContext.Provider>
  );
}

export default ToastWrapper;
