import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./exerciseDetail.styles.scss";
import { fetchExerciseByID } from "../../utils/fetchData";
import ExerciseVideos from "../../components/exerciseVideos/exerciseVideos.components";
import ExerciseInfo from "../../components/exerciseInfo/exerciseInfo.components";
import SimilarExercises from "../../components/similarExercises/similarExercises.components";

function ExerciseDetail() {
  const altObj = {
    bodyPart: "chest",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2364.gif",
    id: "2364",
    name: "assisted wide-grip chest dip (kneeling)",
    target: "pectorals",
  };

  const { id } = useParams();
  const [exercisebByID, setExercisebByID] = useState(altObj);

  // useEffect(() => {
  //   const fetchExercise = async () => {
  //     const exercise = await fetchExerciseByID(id);
  //     setExercisebByID(exercise);
  //   };
  //   fetchExercise();
  // }, [id]);
  //console.log(exercisebByID);
  return (
    <section className="exercise-detail container">
      <ExerciseInfo exercisebByID={exercisebByID} />
      <ExerciseVideos />
      <SimilarExercises />
    </section>
  );
}
export default ExerciseDetail;
