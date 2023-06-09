import { Link } from "react-router-dom";
import "./styles.scss";
import React from "react";

import { useApp } from "../../contexts/ContextApi";

export default function Card({ item }) {
  const { image1, image2 } = useApp();
  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.novo && <span>Novo</span>}
          <img src={image1} alt="" className="mainImg" />
          <img src={image2} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes?.titulo}</h2>
        <div className="prices">
          {/* <h3>R${item.oldPrice},00</h3> */}
          <h3>R$ {item?.attributes?.preco}</h3>
        </div>
      </div>
    </Link>
  );
}
