import React from "react";
import { Card } from "../index";
import { useFetch } from "../../hooks/useFetch";
// import livro2 from "../../../public/images/livro2.png";

import "./styles.scss";
export default function List() {
  const { products } = useFetch("/produtos?populate=*");
 
  return (
    <div className="list">
      {products?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}
