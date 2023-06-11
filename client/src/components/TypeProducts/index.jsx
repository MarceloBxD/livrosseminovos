import "./styles.scss";
import React from "react";

import { Card } from "../../components";
import { useFetch } from "../../hooks/useFetch";

export default function TypeProducts({ type }) {
  const { products, error } = useFetch("/produtos?populate=*");
  return (
    <div className="typeProducts">
      <div className="top">
        <h1>Produtos {type}</h1>
        <p>
          Aqui estão alguns produtos que você pode gostar, esperamos que goste
          de nossos produtos e que os mesmos possam abrir oportunidade pra
          vocês.
        </p>
      </div>
      <div className="bottom">
        {products.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
