import { useContext, React, useRef } from "react";
import { ExercisesContext } from "../../contexts/exercises/exersices.contexts";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./swiperCarousel.styles.scss";
function SwiperCarousel({ myRef }) {
  const { bodyParts, setFilteredExercises, allExercise } =
    useContext(ExercisesContext);
  //console.log(bodyParts);

  const swiperBodyPartHandler = (bpart) => {
    const filteredData = allExercise.filter((exercise) =>
      exercise.bodyPart.toLocaleLowerCase().includes(bpart.toLocaleLowerCase())
    );
    setFilteredExercises(filteredData);
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="swiper-carousel container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {bodyParts &&
          bodyParts.map((bpart, index) => (
            <SwiperSlide
              key={index}
              onClick={() => swiperBodyPartHandler(bpart)}
            >
              <div>
                <h5>{bpart}</h5>
                <img
                  src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/undefined/external-gym-fitness-and-gym-xnimrodx-blue-xnimrodx-5.png"
                  alt={bpart}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default SwiperCarousel;
