import { React, useState, useEffect } from "react";
import "./searchExercises.styles.scss";
import {
  fetchAllExercies,
  fetchAllBodyparts,
  fetchData,
} from "../../utils/fetchData";
function SearchExercises() {
  //states
  const [searchInput, setSearchInput] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercise, setAllExercise] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  //console.log(allExercise);
  //functions
  const inputHandler = ({ target: { value } }) => {
    setSearchInput(value.toLocaleLowerCase());
  };
  const searchHanler = async () => {
    if (searchInput) {
      setAllExercise(await fetchAllExercies());
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

  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await fetchAllBodyparts();
      setBodyParts(data);
    };
    fetchBodyParts();
  }, []);

  return (
    <section className="search-exercises container">
      <h2>
        Awesome Exersices You <br /> Should Know
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
