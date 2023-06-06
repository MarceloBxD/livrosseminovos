import React from "react";
import "./styles.scss";
import Swiper from "../../components/Swiper";
import { TypeProducts } from "../../components";

export default function Home() {
  return (
    <div className="home">
      <Swiper />
      <TypeProducts type="mais vendidos" />
      <TypeProducts type="Novos" />
    </div>
  );
}