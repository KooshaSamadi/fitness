import "./exerciseInfo.styles.scss";

function ExerciseInfo({ exercisebByID }) {
  const { bodyPart, equipment, gifUrl, id, name, target } = exercisebByID;
  return (
    <div className="exercise-info">
      <div className="row">
        <div className="col-md-6 col-sm-12 exercise-info-gif">
          <img src={gifUrl} alt={name} />
        </div>
        <div className="exercis-info-detail col-md-6 col-sm-12">
          <h2>{name}</h2>
          <p className="exercis-info-detail-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            reprehenderit vero, minima rerum, enim accusantium voluptatum,
            placeat aut impedit maiores suscipit quod ullam aliquam sapiente
            perspiciatis exercitationem sequi illo non?
          </p>
          <div className="exercis-info-detail-icons">
            <div>
              <img
                src="https://img.icons8.com/external-nawicon-glyph-nawicon/60/000000/external-gym-hotel-nawicon-glyph-nawicon.png"
                alt={bodyPart}
              />
              <p>{bodyPart}</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/glyph-neue/60/000000/trainers.png"
                alt={equipment}
              />
              <p>{equipment}</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/ios-filled/60/000000/treadmill.png"
                alt={target}
              />
              <p>{target}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseInfo;
