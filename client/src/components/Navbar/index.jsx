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

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link className="link" to="/">
          Recicle Livros
        </Link>
      </div>
      <div className="right">
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
