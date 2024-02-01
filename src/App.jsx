import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllMovies from "./routes/AllMovies";
import Summary from "./routes/Summary";
import Form from "./routes/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMovieDataActions } from "./store/movieDataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      let data = await res.json();
      dispatch(setMovieDataActions.setMovieData(data));
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="nav">
        <h1>Watch Movies</h1>
      </div>
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/summary/:id" element={<Summary />} />
        <Route path="/form/:id" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
