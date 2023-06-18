import React from "react";
import "./styles.scss";

import { makeRequest } from "../../makeRequest";

import { loadStripe } from "@stripe/stripe-js";

import { useApp } from "../../contexts/ContextApi";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
  const { cartItems, setCartItems, setCartQuantity, setOpen, cartQuantity } =
    useApp();

  const handleDelete = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
    setCartQuantity(cartQuantity == 1 ? 0 : cartQuantity - 1);
  };

  const stripePromise = loadStripe(
    "pk_live_51N80DtJDY5lruH3Ne9l3D4Lnm2I8dkO0rzad7EbQw7spSrhWBzxtWj02qoEgJ9QJaoYzzJHM0oCn0n1J0g4u1HlL00of0o51i3"
  );
  // console.log(stripePromise);

  // api stripe: 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
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const response = await makeRequest.post("/orders", {
        products: cartItems,
      });
      console.log(response);
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

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
              onClick={() => handleDelete(item.id)}
              className="delete"
            />
          </div>
        ))}
        {cartQuantity === 0 ? (
          "Carrinho vazio"
        ) : (
          <div className="total">
            <h3>Subtotal: R$ {totalPrice.toFixed(2)}</h3>
            <button onClick={() => handlePayment()}>Finalizar compra</button>
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
