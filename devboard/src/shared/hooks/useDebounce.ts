'use client'; /* Este hook se utiliza para crear un valor que se actualiza solo después de que el usuario ha dejado de escribir durante un período de tiempo específico (delay). Esto es útil para optimizar la búsqueda o cualquier operación que dependa de la entrada del usuario, evitando llamadas innecesarias mientras el usuario está escribiendo. */

import { useEffect, useState } from "react";

export function useDebounce<T>(
  value: T,
  delay: number = 300
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}