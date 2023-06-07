import "./styles.scss";
import React, { useState } from "react";
import { useApp } from "../../contexts/ContextApi";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

import Cart from "../Cart";

export default function Navbar() {
  const { cartQuantity, open, setOpen } = useApp();

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
        <div className="cartIcon" onClick={() => setOpen(!open)}>
          <ShoppingCartIcon />
          <span className="span">{cartQuantity}</span>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}
