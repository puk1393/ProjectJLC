'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

type FiltersContextType = {
  search: string;
  setSearch: (v: string) => void;

  priority: string;
  setPriority: (v: string) => void;

  responsible: string;
  setResponsible: (v: string) => void;

  resetFilters: () => void;
  hasActiveFilters: boolean;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [responsible, setResponsible] = useState("");

  const resetFilters = useCallback(() => {
    setSearch("");
    setPriority("");
    setResponsible("");
  }, []);

  const hasActiveFilters = useMemo(() => {
    return Boolean(search || priority || responsible);
  }, [search, priority, responsible]);

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        priority,
        setPriority,
        responsible,
        setResponsible,
        resetFilters,
        hasActiveFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) {
    throw new Error("useFilters must be used inside FiltersProvider");
  }
  return ctx;
};