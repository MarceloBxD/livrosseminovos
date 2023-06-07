import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  const value = {
    cartQuantity,
    setCartQuantity,
    open,
    setOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
