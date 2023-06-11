import React from "react";
import "./styles.scss";

import { useApp } from "../../contexts/ContextApi";
import { useFetch } from "../../hooks/useFetch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
  const { cartItems, setCartItems, setCartQuantity, setOpen, cartQuantity } =
    useApp();

  const handleDelete = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartQuantity(cartQuantity > 0 ? cartQuantity - 1 : 0);
    setCartItems(newCart);
  };

  const totalPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  console.log(totalPrice);

  return (
    <div className="cart">
      <h1 className="cartTitle">Items adicionados ao carrinho</h1>
      <div className="items">
        {cartItems?.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt="" />
            <div className="details">
              <h1 className="bookTitle">{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} X R${item?.price}
              </div>
            </div>
            <DeleteOutlineIcon
              onClick={(id) => handleDelete(id)}
              className="delete"
            />
          </div>
        ))}
        {cartQuantity === 0 ? (
          "Carrinho vazio"
        ) : (
          <div className="total">
            <h3>Subtotal: R$ {totalPrice}</h3>
            <button>Finalizar compra</button>
            <p
              className="reset"
              onClick={() =>
                setCartItems([]) & setCartQuantity(0) & setOpen(false)
              }
            >
              Resetar carrinho
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
