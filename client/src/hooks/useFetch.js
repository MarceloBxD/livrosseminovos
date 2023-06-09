import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest.get(url);
        setProducts(response.data.data);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return { products, error };
};
