import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Form() {
  const { id } = useParams();
  const movies = useSelector((store) => store.movieData);
  const [movie, setMovie] = useState(null);

  const [formData, setFormData] = useState({
    movieName: "",
    personName: "",
    email: "",
  });



  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.show.id == id);
    console.log(selectedMovie);

    setMovie(selectedMovie || null);
  }, [id, movies]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSave = {
      movieName: movie?.show?.name || "",
      ...formData,
    };

    localStorage.setItem("bookingData", JSON.stringify(dataToSave));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="booking-form-modal">
      <div className="booking-form">
        <h2>Book a Ticket for {movie?.show?.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name:
            <input
              type="text"
              name="movieName"
              value={movie?.show?.name || "no movie"}
              readOnly
            />
          </label>
          <label>
            Person's Name:
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
