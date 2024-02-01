import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieDataActions } from "../store/movieDataSlice";

function MovieData() {
  const dispatch = useDispatch();

  useEffect(() => {
    URL = "https://api.tvmaze.com/search/shows?q=all";
    const fetchData = async () => {
      let res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      let data = await res.json();
      dispatch(setMovieDataActions.setMovieData(data));
      // console.log(data);
    };
    fetchData();
  }, []);

  return <div></div>;
}

export default MovieData;
