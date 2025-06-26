// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import slide6 from "../../assets/home/slide6.jpg";
import slide7 from "../../assets/home/slide7.jpg";
import slide8 from "../../assets/home/slide8.jpg";
import slide9 from "../../assets/home/slide9.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTile from "../../Components/SectionTitle/SectionTile";

const OrderSlide = () => {
  return (
    <section>
        <SectionTile subHading={"From 11:00am to 10:00pm"} Hading={"ONLINE ORDER"}> 
        </SectionTile>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[350px]" src={slide1} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide2} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide3} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide4} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide5} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide6} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide7} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide8} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px]" src={slide9} alt="image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderSlide;
