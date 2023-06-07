import "./styles.scss";
import React, { useState } from "react";
import { useApp } from "../../contexts/ContextApi";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import img from "../../../public/images/image2.jpg";

export default function Product() {
  const { cartQuantity, setCartQuantity, setOpen } = useApp();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(33.99);
  const images = [img, img];

  return (
    <div className="product">
      <div className="left">
        <div className="sideImgs">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="infos">
          <h1>Lord of Rings</h1>
          <h3>R$ {(price * quantity).toFixed(2)}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            ullam, qui commodi voluptatum repellendus quae totam suscipit
            facilis placeat quis neque ratione harum quo tempore eveniet
            doloremque, earum vitae eius.
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            >
              -
            </button>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              value={quantity}
            />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button
            className="addCart"
            onClick={() => setCartQuantity(cartQuantity + 1) & setOpen(true)}
          >
            <AddShoppingCartIcon />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
