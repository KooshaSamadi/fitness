import { React, createContext, useState, useEffect } from "react";
import {
  fetchAllExercies,
  fetchAllBodyparts,
  fetchData,
} from "../../utils/fetchData";
export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercise, setAllExercise] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await fetchAllBodyparts();
      setBodyParts(data);
    };
    fetchBodyParts();
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await fetchAllExercies();
      setAllExercise(data);
    };
    fetchExercises();
  }, []);

  const value = {
    bodyParts,
    setBodyParts,
    allExercise,
    filteredExercises,
    setFilteredExercises,
  };
  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
