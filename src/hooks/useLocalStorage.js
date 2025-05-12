import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(`${key}`);
    return JSON.parse(storedValue) || initialValue;
  });
  //persist the key to localStorage
  useEffect(() => {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
