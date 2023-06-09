import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="contact">
      <div className="text">Entre em contato</div>

      <div className="mediaIcons">
        <Link
          className="link"
          style={{ textDecoration: "none", color: "#FFF" }}
          to="https://www.instagram.com/_bracetmarcelo/?next=%2F"
        >
          <InstagramIcon style={{ cursor: "pointer" }} />
        </Link>
        <Link className="link" to="www.gmail.com">
          <EmailIcon style={{ cursor: "pointer" }} />
        </Link>
        <p>marcelo.bracet1@gmail.com</p>
      </div>
    </div>
  );
}
