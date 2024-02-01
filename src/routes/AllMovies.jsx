import React from "react";
import "./AllMovies.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function AllMovies() {
  const navigate = useNavigate();
  const movies = useSelector((store) => store.movieData);

  const showSummary = (id) => {
    navigate(`/summary/${id}`);

  };

  return (
    <>  
      {movies.map((movie) => {
        return (
          <div className="movie-card" key={movie.show.id}>
            <div className="image-container">
              <img
                src={movie?.show?.image?.medium}
                alt={`poster- ${movie.show.name}`}
              />
            </div>
            <div className="info-container">
              <h2 className="show-name">{movie?.show?.name}</h2>
              <p className="details">Language: {movie.show.language}</p>
              <p className="details">Genres: {movie.show.genres.join(", ")}</p>
              <p className="details">Rating: {movie.show.rating.average}</p>
              <button
                className="summary-button"
                onClick={() => showSummary(movie.show.id)}
              >
                Show Summary
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AllMovies;
