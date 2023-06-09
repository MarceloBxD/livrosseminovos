import { Link } from "react-router-dom";
import "./styles.scss";
import React, { useState } from "react";
import { useApp } from "../../contexts/ContextApi";
import { useFetch } from "../../hooks/useFetch";

export default function Card({ item }) {
  const { products } = useFetch("/produtos?populate=*");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  var firstImage =
    "http://localhost:1337" + item.attributes.imagem1.data.attributes.url;
  var secondImage =
    "http://localhost:1337" + item.attributes.imagem2.data.attributes.url;
  // "http://localhost:1337" + item.attributes.imagem1.data.attributes.url;

  return (
    <Link className="link" to={`/products/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.novo && <span>Novo</span>}
          <img src={firstImage} alt="" className="mainImg" />
          <img src={secondImage} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes?.titulo}</h2>
        <div className="prices">
          <h3>R$ {item?.attributes?.preco}</h3>
        </div>
      </div>
    </Link>
  );
}
