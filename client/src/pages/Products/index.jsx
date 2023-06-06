import React, { useState } from "react";
import "./styles.scss";
import { List } from "../../components";
import { useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();
  const catId = parseInt(params.id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterArea">
          <h4>Filtrar por preço</h4>
          <div className="filterByPrice">
            <span>0</span>
            <input
              type="range"
              onChange={(e) => setMaxPrice(e.target.value)}
              name="filter"
              max={120}
              min={0}
              id="filter"
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="sortBy">
          <h4>Ordenar por:</h4>
          <div className="sort">
            <input
              onChange={(e) => setSortBy("asc")}
              type="radio"
              value="asc"
              name="price"
              id="asc"
            />
            <label htmlFor="asc">Menor Preço</label>
          </div>
          <div className="sort">
            <input
              type="radio"
              onChange={(e) => setSortBy("desc")}
              value="desc"
              name="price"
              id="desc"
            />
            <label htmlFor="desc">Maior Preço</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1456315138460-858d1089ddba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJhJUMzJUE3YSUyMGxlaXR1cmF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="products-container">
          <List catId={catId} maxPrice={maxPrice} sortBy={sortBy} />
        </div>
      </div>
    </div>
  );
}
