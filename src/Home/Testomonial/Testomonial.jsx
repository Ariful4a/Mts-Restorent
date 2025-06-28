import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Rating from "react-rating";

const Testomonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              </div>
              <p>{review.details}</p>
              <h2>{review.name}</h2>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testomonial;
