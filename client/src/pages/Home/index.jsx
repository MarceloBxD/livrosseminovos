import React from "react";
import "./styles.scss";
import Swiper from "../../components/Swiper";
import { Contact, Feedback, Support, TypeProducts } from "../../components";

export default function Home() {
  return (
    <div className="home">
      <Swiper />
      <TypeProducts type="Novos" />
      <Contact />
      <Support />
      <Feedback />
    </div>
  );
}
