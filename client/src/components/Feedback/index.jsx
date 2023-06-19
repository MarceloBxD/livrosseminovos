import React, { useEffect } from "react";
import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Feedback() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 200,
    });
  }, []);
  const feedbacks = [
    {
      id: 1,
      img: "https://i.imgur.com/8Km9tLL.jpg",
      name: "Eduardo Oliveira",
      description: "Loja excepcional e atendimento de primeira qualidade!",
    },
    {
      id: 2,
      img: "https://i.imgur.com/8Km9tLL.jpg",
      name: "Sara Almeida",
      description:
        "Produtos parecem literalmente novos! Parabéns aos criadores da loja!",
    },
    {
      id: 3,
      img: "https://i.imgur.com/8Km9tLL.jpg",
      name: "Simone Alexandre",
      description: "Não tenho nada a reclamar, só elogiar! Nota 10!",
    },
  ];

  return (
    <div className="feedbackSection">
      <h1 className="mainTitle">Avaliações</h1>
      <div className="feedbackContainer" data-aos="zoom-out-down">
        {feedbacks.map((item) => (
          <div className="feedbackItem" key={item.id}>
            <img className="feedbackImg" src={item.img} alt="" />
            <div className="feedbackItemName">{item.name}</div>
            <div className="feedbackItemDescription">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
