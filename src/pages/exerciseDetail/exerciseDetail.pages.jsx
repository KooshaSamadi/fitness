import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./exerciseDetail.styles.scss";
import { fetchExerciseByID } from "../../utils/fetchData";
import ExerciseVideos from "../../components/exerciseVideos/exerciseVideos.components";
import ExerciseInfo from "../../components/exerciseInfo/exerciseInfo.components";

function ExerciseDetail() {
  const { id } = useParams();
  const [exercisebByID, setExercisebByID] = useState([]);

  useEffect(() => {
    const fetchExercise = async () => {
      const exercise = await fetchExerciseByID(id);
      setExercisebByID(exercise);
    };
    fetchExercise();
  }, [id]);
  //console.log(exercisebByID);
  return (
    <section className="exercise-detail container-xxl">
      <ExerciseInfo exercisebByID={exercisebByID} />
      <ExerciseVideos exercisebByID={exercisebByID} />
    </section>
  );
}
export default ExerciseDetail;
