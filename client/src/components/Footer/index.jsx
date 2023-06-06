import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrap">© 2021 All rights reserved.</div>
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
      <div className="bottom"></div>
    </div>
  );
}
