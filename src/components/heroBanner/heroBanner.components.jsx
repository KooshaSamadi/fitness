import React from "react";
import "./heroBanner.styles.scss";
import heroBanner from "../../assets/herobanner.jpg";

function HeroBanner({ myRef = { myRef } }) {
  return (
    <div className="herobanner row">
      <div className="banner-detail col-md-6">
        <h1>Fitness Club</h1>
        <p>
          Sweat, Smile <br /> and Repeat
        </p>
        <p>Check out the most effective exercises</p>
        <button
          type="button"
          className="btn btn-primary "
          onClick={() => {
            myRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Explore Exercises
        </button>
        <h2>Exersice</h2>
      </div>

      <div className="col-md-6">
        <img src={heroBanner} alt="Woman Holding Exercise Equipment" />
      </div>
    </div>
  );
}

export default HeroBanner;
