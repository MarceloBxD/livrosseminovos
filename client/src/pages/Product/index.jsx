import "./styles.scss";
import React, { useState } from "react";
import { useApp } from "../../contexts/ContextApi";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);

  const {
    setOpen,
    cartItems,
    setCartItems,
    quantity,
    setQuantity,
    setCartQuantity,
    cartQuantity,
  } = useApp();
  const { products } = useFetch(`/produtos/${id}?populate=*`);

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + 1);
    setOpen(true);

    if (cartItems.some((item) => item.id === products?.id)) {
      const newCart = cartItems.map((item) => {
        if (item.id === products?.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      setCartItems(newCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: products?.id,
          title: products?.attributes?.titulo,
          img:
            "http://localhost:1337" +
            products?.attributes?.imagem1?.data?.attributes?.url,
          price: products?.attributes?.preco,
          quantity: quantity,
        },
      ]);
    }
  };

  const images = [
    "http://localhost:1337" +
      products?.attributes?.imagem1?.data?.attributes?.url,
    "http://localhost:1337" +
      products?.attributes?.imagem2?.data?.attributes?.url,
  ];

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
          <h1>{products?.attributes?.titulo}</h1>
          <h3>R$ {products?.attributes?.preco * quantity}</h3>
          <p>{products?.attributes?.resumo}</p>
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
          <button className="addCart" onClick={() => handleAddToCart(products)}>
            <AddShoppingCartIcon />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
