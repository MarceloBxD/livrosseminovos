import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  const value = {
    cartQuantity,
    setCartQuantity,
    open,
    setOpen,
    products,
    setProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
