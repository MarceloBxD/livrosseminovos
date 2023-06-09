import "./styles.scss";
import React from "react";

import { Card } from "../../components";
import { useApp } from "../../contexts/ContextApi";

export default function TypeProducts({ type }) {
  const { products } = useApp();
  return (
    <div className="typeProducts">
      <div className="top">
        <h1>Produtos {type}</h1>
        <p>
          Produtos usados por somente uma pessoa, espero que goste dos livros,
          com certeza irá gostar da qualidade do nosso serviço!
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
