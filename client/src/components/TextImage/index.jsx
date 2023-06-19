import React, { useEffect } from "react";
import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";
export default function TextImage({ img, title, desc, btnText, display }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 200,
    });
  }, []);

  const SeeProducts = () => {
    window.scrollTo({
      top: 730,
      behavior: "smooth",
    });
  };

  return (
    <div className="textImgContainer">
      <div className="leftImg">
        <img data-aos="fade-right" src={img} />
      </div>
      <div data-aos="fade-left" className="rightText">
        <h1 className="headtitle">{title}</h1>
        <p className="rightDesc">{desc}</p>
        <button
          data-aos="fade-up"
          style={{ display: display }}
          className="btnRight"
          onClick={SeeProducts}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
