import React from "react";
import livro2 from "../../../public/images/livro2.png";
import "./styles.scss";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
  const data = [
    {
      id: 1,
      img: "https://anacanosa.com.br/wp-content/uploads/livro_sexualidades_e_violencias_anacanosa.png",
      img2: livro2,
      desc: "Lord of Rings foi um dos livros mais lidos no ano de 2023.",
      title: "Lord of Rings",
      isNew: true,
      oldPrice: 39,
      price: 32,
    },
  ];

  return (
    <div className="cart">
      <h1 className="cartTitle">Items adicionados ao carrinho</h1>
      <div className="items">
        {data?.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt="" />
            <div className="details">
              <h1 className="bookTitle">{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">1 X R${item.price},00</div>
            </div>
            <DeleteOutlineIcon className="delete" />
          </div>
        ))}
        <div className="total">
          <h3>Subtotal: R$ 32,00</h3>
          <button>Finalizar compra</button>
          <p className="reset">Resetar carrinho</p>
        </div>
      </div>
    </div>
  );
}
