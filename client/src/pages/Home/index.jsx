import React from "react";
import "./styles.scss";
import Swiper from "../../components/Swiper";
import { Contact, TypeProducts, FlexImages } from "../../components";

export default function Home() {
  return (
    <div className="home">
      <Swiper />
      <TypeProducts type="Novos" />
      <FlexImages />
      <Contact />
    </div>
  );
}
