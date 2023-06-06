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
    {
      id: 2,
      img: "https://anacanosa.com.br/wp-content/uploads/livro_sexualidades_e_violencias_anacanosa.png",
      img2: livro2,
      title: "Título do livro",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
    {
      id: 3,
      img: "https://anacanosa.com.br/wp-content/uploads/livro_sexualidades_e_violencias_anacanosa.png",
      img2: livro2,
      title: "Título do livro",
      isNew: false,
      oldPrice: 39,
      price: 32,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
