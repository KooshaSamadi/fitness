import "./exerciseVideos.styles.scss";
import { React, useState, useEffect } from "react";
import { fetchRelativeVideosFormYoutube } from "../../utils/fetchData";
const ExerciseVideos = ({ exercisebByID }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = exercisebByID;
  const [exerciseVideos, setExerciseVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const { contents } = await fetchRelativeVideosFormYoutube(name);
      setExerciseVideos(contents);
    };
    getVideos();
  }, [id]);
  console.log(exerciseVideos);

  return (
    <div className="exercise-videos">
      <h2>Youtube Videos</h2>
      <div className="row">
        {exerciseVideos.length > 5
          ? exerciseVideos
              ?.slice(0, 6)
              .map(
                (
                  { video: { channelName, thumbnails, title, videoId } },
                  index
                ) => (
                  <a
                    className="col-md-6 col-lg-4 col-sm-12 exercise-video"
                    key={index}
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={thumbnails[0].url}
                      alt={title}
                      className="youtube-image"
                    />
                    <h5>{title}</h5>
                    <p>{channelName}</p>
                  </a>
                )
              )
          : "Loading"}
      </div>
    </div>
  );
};

export default ExerciseVideos;
