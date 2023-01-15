import React, { useState, useEffect } from 'react';

export default function useLocalStorage(keyName, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.addEventListener('local-storage', function () {
      const items = JSON.parse(localStorage.getItem(keyName));
      setStoredValue(items);
    });
    return () => window.removeEventListener('local-storage', () => {});
  }, []);

  const setValue = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
      dispatchEvent(new Event('local-storage'));
    } catch (err) {}
  };

  return [storedValue, setValue];
}
