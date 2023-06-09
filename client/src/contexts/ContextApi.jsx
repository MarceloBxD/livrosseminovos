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
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const value = {
    cartQuantity,
    setCartQuantity,
    open,
    setOpen,
    image1,
    setImage1,
    image2,
    setImage2,
    products,
    setProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
