import React from "react";
import "./styles.scss";

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
      name: "Ubem",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvSuRk_-4x8LC4w1SLxID85hXvD2lzukJCA&usqp=CAU",
    },
  ];

  return (
    <div className="footer">
      <div className="top">
        <div className="left-footer">
          <div className="categories">
            <div className="title">Categories</div>
            <div className="content">
              <div className="category">Finanças</div>
              <div className="category">Ficção</div>
              <div className="category">No preçinho</div>
            </div>
          </div>
          <div className="categories">
            <div className="title">Categories</div>
            <div className="content">
              <div className="category">Finanças</div>
              <div className="category">Ficção</div>
              <div className="category">No preçinho</div>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="content">
            <div className="title">About</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatibus quae doloribus quidem repellendus? Quisquam
              voluptatum,
            </div>
          </div>
          <div className="content">
            <div className="title">About</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatibus quae doloribus quidem repellendus? Quisquam
              voluptatum,
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="editoras">
          {editoras.map((editora) => (
            <div className="editora" key={editora.id}>
              <img src={editora.image} alt={editora.name} />
            </div>
          ))}
        </div>
        <div className="wrap">© 2021 All rights reserved.</div>
      </div>
    </div>
  );
}
