import React from "react";
import "./styles.scss";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="contact">
      <div className="text">Entre em contato</div>
      <div className="inputArea">
        <input type="text" placeholder="Email" />
        <button>Join us</button>
      </div>
      <div className="mediaIcons">
        <InstagramIcon style={{ cursor: "pointer" }} />
        <WhatsAppIcon style={{ cursor: "pointer" }} />
        <EmailIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
