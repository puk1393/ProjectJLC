'use client';

import { useEffect, useState} from "react";

export function useAsync<T>(
  asyncFunction: (
    signal: AbortSignal
  ) => Promise<T>,
  dependencies: React.DependencyList = []
) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await asyncFunction(controller.signal);

        setData(result);
      } catch (err: any) {
        if (
          err.name !== "AbortError"
        ) {
          setError("Error cargando datos");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      controller.abort();
    };
  }, dependencies);

  return {
    data,
    loading,
    error,
  };
}