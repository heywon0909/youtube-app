import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [Loading, setLoading] = useState(false);
  const setLoadingMode = () => setLoading(!Loading);
  return (
    <LoadingContext.Provider value={{ Loading, setLoadingMode }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingMode = () => useContext(LoadingContext);
