import React from "react";
import "./styles.scss";

import publiX from "../../../public/images/publiX.png";

export default function Footer() {
  const editoras = [
    {
      id: 1,
      name: "Moderna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkxKidEh3BvSELvqJUjcP2KEb4nmoYVBoDQ&usqp=CAU",
    },

    {
      id: 3,
      name: "publiX",
      image: publiX,
    },
  ];

  return (
    <div className="footer">
      <div className="top">
        <div className="left-footer">
          <div className="categories">
            <div className="title">Categorias</div>
            <div className="content">
              <div className="category">Finanças</div>
              <div className="category">Ficção</div>
              <div className="category">No preçinho</div>
            </div>
          </div>
          <div className="categories">
            <div className="title">Sub Categorias</div>
            <div className="content">
              <div className="category">Crianças</div>
              <div className="category">Investidores</div>
              <div className="category">Adolescentes</div>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="content">
            <div className="title">Sobre Nós</div>
            <div className="description">
              Pensamos em criar esse site com o inuito de trocar os livros já
              lidos por outros que ainda não lemos, assim economizamos e
              conseguimos oferecer um preço mais acessível para todos.
            </div>
          </div>
          <div className="content">
            <div className="title">Recicle Livros</div>
            <div className="description">
              Possivelmente vocês possuem livros em casas no qual querem se
              livrar, porém não sabe como. Estamos trabalhando para que você
              possa juntar ele nesse site e consiga ajudar pessoas a lerem por
              um preço mais amigável.
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="editoras">
          <div className="left">© 2023 Todos direitos reservados.</div>
          <div className="right">
            {editoras.map((editora) => (
              <div className="editora" key={editora.id}>
                <img src={editora.image} alt={editora.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
