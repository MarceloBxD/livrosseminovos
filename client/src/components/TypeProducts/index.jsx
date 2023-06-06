import { Card } from "../../components";
import React from "react";
import "./styles.scss";

import imglivro from "../../../public/images/imglivro.png";
import livro2 from "../../../public/images/livro2.png";

export default function TypeProducts({ type }) {
  const data = [
    {
      id: 1,
      img: imglivro,
      img2: livro2,
      title: "Título do livro",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
    {
      id: 2,
      img: imglivro,
      img2: livro2,
      title: "Título do livro",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
    {
      id: 3,
      img: imglivro,
      img2: livro2,
      title: "Título do livro",
      isNew: false,
      oldPrice: 39,
      price: 32,
    },
  ];

  return (
    <div className="typeProducts">
      <div className="top">
        <h1>Produtos {type}</h1>
        <p>
          {/* texto será alterado com o uso do strapi */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          debitis, quia fuga esse quo nam, fugiat similique enim eaque, quis
          rem. Suscipit esse corporis est neque, dignissimos in commodi
          veritatis?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
