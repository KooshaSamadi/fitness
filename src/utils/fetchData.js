const bodyPartUrl = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
const allExercisesUrl = "https://exercisedb.p.rapidapi.com/exercises";
const exersiceOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const fetchAllExercies = async () => {
  return await fetchData(allExercisesUrl, exersiceOptions);
};
export const fetchAllBodyparts = async () => {
  return await fetchData(bodyPartUrl, exersiceOptions);
};

export const fetchExerciseByID = async (id) => {
  const exerciseByIDUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  return await fetchData(exerciseByIDUrl, exersiceOptions);
};
