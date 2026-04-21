import { FiltersProvider } from "@/shared/context/FilterContext";

export const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return <FiltersProvider>{children}</FiltersProvider>;
};