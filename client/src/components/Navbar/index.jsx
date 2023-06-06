import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import "./styles.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const categories = ["Finanças", "Ficção", "No preçinho"];
  const headerInfo = [
    {
      url: "/about",
      title: "Sobre",
    },
    {
      url: "/contact",
      title: "Contate-nos",
    },
  ];

  return (
    <div className="navbar-container">
      <div className="left-navbar">
        {categories.map((category, index) => (
          <div key={index} className="category">
            {category}
          </div>
        ))}
      </div>
      <div className="center">
        <Link className="link" to="/">
          Biblioteca Particular
        </Link>
      </div>
      <div className="right">
        <div className="header-info">
          {headerInfo.map((info, index) => (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "#000" }}
              to={info.url}
            >
              <div key={index} className="info">
                {info.title}
              </div>
            </Link>
          ))}
        </div>
        <PersonIcon style={{ cursor: "pointer" }} />
        <SearchIcon style={{ cursor: "pointer" }} />
        <div className="cart">
          <ShoppingCartIcon />
          <span className="span">0</span>
        </div>
      </div>
    </div>
  );
}
