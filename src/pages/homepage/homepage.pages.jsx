import { React, useRef } from "react";
import "./homepage.styles.scss";
import HeroBanner from "../../components/heroBanner/heroBanner.components";
import SearchExercises from "../../components/searchExercises/searchExercises.components";
import SwiperCarousel from "../../components/swiperCarousel/swiperCarousel.components";
import Exercises from "../../components/exercises/exercises.components";
function Homepage() {
  const myRef = useRef();
  return (
    <section className="container-xxl">
      <HeroBanner myRef={myRef}/>
      <SearchExercises />
      <SwiperCarousel myRef={myRef} />
      <Exercises myRef={myRef} />
    </section>
  );
}

export default Homepage;
