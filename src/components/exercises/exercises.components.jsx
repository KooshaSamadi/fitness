import "./exercises.styles.scss";
import ExerciseCard from "../exerciseCard/exerciseCard.components";
import { useState, React, useContext, useRef } from "react";
import { Pagination } from "@mui/material";
import { ExercisesContext } from "../../contexts/exercises/exersices.contexts";

function Exercises({ myRef }) {
  //context
  const { filteredExercises, allExercise, setFilteredExercises } =
    useContext(ExercisesContext);
  //console.log(filteredExercises.length === 0);
  //console.log(allExercise);

  //states
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesNumber =
    filteredExercises.length === 0
      ? allExercise.length
      : filteredExercises.length;
  const exerciseCardPerPage = 10;

  const indexOfLastExerciseInCurrentPage =
    currentPage * exerciseCardPerPage - 1;
  const indexOfFirstExerciseInCurrentPage =
    indexOfLastExerciseInCurrentPage - exerciseCardPerPage + 1;

  const currentPageExercises = (
    filteredExercises.length === 0 ? allExercise : filteredExercises
  ).slice(indexOfFirstExerciseInCurrentPage, indexOfLastExerciseInCurrentPage);
  console.log(exercisesNumber / exerciseCardPerPage);

  const paginate = (e, value) => {
    setCurrentPage(value);
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="exercises-container container">
      <div className="exercises-container-firstDiv">
        <h2 ref={myRef}>
          {filteredExercises.length === 0 ? "All Exercises" : "Showing Results"}
        </h2>
        <button
          className="btn btn-primary"
          onClick={() => setFilteredExercises([])}
        >
          Load All Exercises
        </button>
      </div>

      <div className="row">
        {currentPageExercises &&
          currentPageExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </div>
      <div className="exercises-pagination">
        <Pagination
          count={Math.ceil(exercisesNumber / exerciseCardPerPage)}
          onChange={paginate}
          defaultPage={1}
          color="primary"
          shape="rounded"
          page={currentPage}
        />
      </div>
    </section>
  );
}

export default Exercises;
