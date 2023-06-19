import React from "react";
import "./styles.scss";
import Swiper from "../../components/Swiper";
import {
  Contact,
  Feedback,
  Support,
  TextImage,
  TypeProducts,
} from "../../components";

export default function Home() {
  return (
    <div className="home">
      <Swiper />
      <TypeProducts type="Novos" />
      <TextImage
        display={"none"}
        title="Aprenda de dentro pra fora"
        btnText={"Aprenda de dentro pra fora!"}
        desc="Nosso objetivo é estimular a leitura e o conhecimento, através de
          livros que possam transformar a vida das pessoas. Livros não são só um
          passatempo, mas uma forma de se conectar com o mundo e com você mesmo."
        img="https://images.unsplash.com/photo-1586448983330-d03f696c8271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVzc29hJTIwbGVuZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Support />
      <TextImage
        title="Reviva a criança que há em você"
        btnText={"Reviva a criança que há em você!"}
        desc="A leitura é uma forma de viajar, de conhecer novos mundos e de se conectar com a criança que há em você. Abuse da imaginação e se divirta, afinal, a vida é muito curta para não se divertir, seja criança, seja feliz!"
        img="https://images.unsplash.com/photo-1590952203438-445a8699a380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWFuJUMzJUE3YSUyMGxlbmRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      />
      <Feedback />
      <Contact />
    </div>
  );
}
