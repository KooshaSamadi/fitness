const bodyPartUrl = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
const allExercisesUrl = "https://exercisedb.p.rapidapi.com/exercises";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ed75709d1msh019d7b72f13d0dap10a3d7jsn433fc48eb898",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const fetchAllExercies = async () => {
  return await fetchData(allExercisesUrl, options);
};
export const fetchAllBodyparts = async () => {
  return await fetchData(bodyPartUrl, options);
};
