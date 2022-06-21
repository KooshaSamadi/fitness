import "./exerciseCard.styles.scss";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  const { bodyPart, equipment, gifUrl, id, name, target } = exercise;
  return (
    <div className="col-md-6 col-lg-4 ">
      <Link to={`/exercise/${id}`}>
        <div className="exercise-car-container">
          <img src={gifUrl} alt={name} />
          <div className="exercise-card-detail">
            <div>
              <p className="exercise-card-body-part">{bodyPart}</p>
              <p>{target}</p>
            </div>
            <h6>{name}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ExerciseCard;
