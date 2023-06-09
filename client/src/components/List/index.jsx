import React from "react";
import { Card } from "../index";
import livro2 from "../../../public/images/livro2.png";

import "./styles.scss";

export default function List() {
  const data = [
    {
      id: 1,
      img: "https://anacanosa.com.br/wp-content/uploads/livro_sexualidades_e_violencias_anacanosa.png",
      img2: livro2,
      title: "Título do livro",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
  ];

  return (
    <div className="list">
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}
