import React from "react";
import "./homepage.styles.scss";
import HeroBanner from "../../components/heroBanner/heroBanner.components";
import SearchExercises from "../../components/searchExercises/searchExercises.components";
function Homepage() {
  return (
    <section className="container-xxl">
      <HeroBanner />
      <SearchExercises />
    </section>
  );
}

export default Homepage;
