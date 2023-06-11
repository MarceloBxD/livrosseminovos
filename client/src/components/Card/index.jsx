import { Link } from "react-router-dom";
import "./styles.scss";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
export default function Card({ item }) {
  const { products } = useFetch("/produtos?populate=*");

  for (let i = 0; i < products.length; i++) {
    var imagem1 =
      "http://localhost:1337" +
      products[i].attributes.imagem1.data.attributes.url;
    var imagem2 =
      "http://localhost:1337" +
      products[i].attributes.imagem2.data.attributes.url;
  }

  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.novo && <span>Novo</span>}
          <img src={imagem1} alt="img1" className="mainImg" />
          <img src={imagem2} alt="img2" className="secondImg" />
        </div>
        <h2>{item?.attributes?.titulo}</h2>
        <div className="prices">
          <h3>R$ {item?.attributes?.preco}</h3>
        </div>
      </div>
    </Link>
  );
}
