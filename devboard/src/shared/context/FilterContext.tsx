import { createContext, useContext, useState, ReactNode } from "react";

type FiltersContextType = {
  search: string;
  setSearch: (v: string) => void;

  priority: string;
  setPriority: (v: string) => void;

  responsible: string;
  setResponsible: (v: string) => void;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [responsible, setResponsible] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        priority,
        setPriority,
        responsible,
        setResponsible,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFilters must be used inside FiltersProvider");
  return ctx;
};