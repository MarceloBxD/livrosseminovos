import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./styles.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.jpg";

export default () => {
  const images = [image1, image2, image3];

  return (
    <div className="swiper">
      <Swiper
        autoplay
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img style={{ width: "100%" }} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
