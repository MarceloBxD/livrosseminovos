import React from "react";
import "./styles.scss";

export default function Support() {
  const supportData = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/3143/3143220.png",
      title: "Entrega Rápida",
      description: "Enviamos com velocidade para TODO Brasil!",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/2089/2089795.png",
      title: "Pagamento Seguro",
      description: "Pague com segurança e comodidade!",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/4021/4021708.png",
      title: "Parcelamento",
      description: "Parcele em até 12x no cartão SEM JUROS!",
    },
  ];

  return (
    <div className="supportContainer">
      {supportData.map((item) => (
        <div className="supportItem" key={item.id}>
          <img className="supportItemImg" src={item.img} />
          <div className="supportItemTitle">{item.title}</div>
          <div className="supportItemDescription">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
