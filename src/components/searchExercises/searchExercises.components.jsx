import { React, useState, useContext } from "react";
import { ExercisesContext } from "../../contexts/exercises/exersices.contexts";
import "./searchExercises.styles.scss";

function SearchExercises() {
  //states
  const [searchInput, setSearchInput] = useState("");
  const { allExercise, filteredExercises, setFilteredExercises } =
    useContext(ExercisesContext);

  //console.log(filteredExercises);
  //console.log(allExercise);
  //functions
  const inputHandler = ({ target: { value } }) => {
    setSearchInput(value.toLocaleLowerCase());
  };
  const searchHanler = async () => {
    if (searchInput) {
      const filteredData = allExercise.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(searchInput) ||
          exercise.target.toLocaleLowerCase().includes(searchInput) ||
          exercise.equipment.toLocaleLowerCase().includes(searchInput) ||
          exercise.bodyPart.toLocaleLowerCase().includes(searchInput)
      );
      setFilteredExercises(filteredData);
    }
  };

  return (
    <section className="search-exercises container">
      <h2>
        Awesome Exersices You <br />
        <span>Should Know</span>
      </h2>
      <div className="input-group mb-3 search-exercises-input">
        <input
          type="text"
          className="form-control"
          placeholder="Search Exercises"
          aria-label="Search Exercises"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={inputHandler}
        />
        <div className="input-group-append">
          <button
            className="btn btn-success "
            type="button"
            onClick={searchHanler}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchExercises;
