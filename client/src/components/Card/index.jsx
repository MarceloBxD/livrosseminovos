import { Link } from "react-router-dom";
import "./styles.scss";
import React from "react";

export default function Card({ item }) {
  return (
    <Link className="link" to={`/products/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>R${item.oldPrice},00</h3>
          <h3>R${item.price},00</h3>
        </div>
      </div>
    </Link>
  );
}
