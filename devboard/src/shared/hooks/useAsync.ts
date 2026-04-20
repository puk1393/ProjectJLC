'use client'; // se utiliza useState y useEffect
import { useEffect, useState, type DependencyList } from "react";

export function useAsync<T>(
  asyncFunction: (signal: AbortSignal) => Promise<T>,
  deps: DependencyList = []
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
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Error cargando datos");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    run();

    return () => controller.abort();
  }, [asyncFunction, deps]);

  return {
    data,
    loading,
    error,
  };
}