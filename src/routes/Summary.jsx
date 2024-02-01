import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Summary() {
  const { id } = useParams();
  const movies = useSelector((store) => store.movieData);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const bookTicket = (id) => {
    navigate(`/Form/${id}`);
  };

  useEffect(() => {
    console.log(movies, "moviesssss");
    const movie = movies.filter((movie) => {
      return movie.show.id == id;
    });
    setMovie(movie);
    console.log(movie, "movie");
  }, [id, movies]);

  if (!movie) {
    return <div>Loading...</div>;
  }



  return (
    <div className="summary-page">
      <div className="summary-header">
        <img src={movie[0]?.show?.image?.medium} alt="All Rise" />
        <h1>{movie[0]?.show?.name}</h1>
        <div className="rating">Rating: {movie[0]?.show?.rating?.average}</div>
      </div>
      <div className="summary-content">
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: movie[0]?.show?.summary }}
        ></p>
        <div className="details">
          <p>
            <strong>Language:</strong> {movie[0]?.show?.language}
          </p>
          <p>
            <strong>Genres:</strong> {movie[0]?.show?.genres.join(", ")}
          </p>
          <p>
            <strong>Premiered:</strong> {movie[0]?.show?.premiered}
          </p>
          <p>
            <strong>Status:</strong> {movie[0]?.show?.status}
          </p>

          <p>
            <strong>URL:</strong>{" "}
            <a href={movie[0]?.show?.url} target="_blank">
              {movie[0]?.show?.url}
            </a>
          </p>
        </div>
        <button
          className="summary-button"
          onClick={() => bookTicket(movie[0].show.id)}
        >
          Book a Ticket
        </button>

        
      </div>
    </div>
  );
}

export default Summary;
