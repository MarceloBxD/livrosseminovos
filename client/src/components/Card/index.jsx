import { Link } from "react-router-dom";
import "./styles.scss";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
export default function Card({ item }) {
  const { products } = useFetch("/produtos?populate=*");

  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.novo && <span>Novo</span>}
          <img
            src={
              "http://localhost:1337" +
              item?.attributes?.imagem1?.data?.attributes.url
            }
            alt="img1"
            className="mainImg"
          />
          <img
            src={
              "http://localhost:1337" +
              item?.attributes?.imagem2?.data?.attributes.url
            }
            alt="img2"
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes?.titulo}</h2>
        <div className="prices">
          <h3>R$ {item?.attributes?.preco}</h3>
        </div>
      </div>
    </Link>
  );
}
