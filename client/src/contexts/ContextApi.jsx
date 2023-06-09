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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/produtos?populate=*",
          {
            headers: {
              Authorization:
                "Bearer 369663bb760870c1ebc88a33a9981943a926d9fb4332c25992cdf6fae7e04248dc225b7fe8cf01664941edd81fad3b83befa8b0b4881592eee537f49b20bcf684029b1707adb0b5c7018cea53c4eb8b3bacee8fe766e9366e2fdccc1a2c28aa3652bf62818e684ab19cd400ba50963dc888bf19b6de72cd1b341073c820fc5b5",
            },
          }
        );
        setProducts(response.data.data);

        setImage1(
          "http://localhost:1337" +
            response.data.data[0].attributes.imagem1.data.attributes.url
        );

        setImage2(
          "http://localhost:1337" +
            response.data.data[0].attributes.imagem2.data.attributes.url
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
