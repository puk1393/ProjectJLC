'use client';

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);

      if (stored) {
        const parsed = JSON.parse(stored);
        setValue(parsed);
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}"`, error);
    }
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error writing localStorage key "${key}"`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}