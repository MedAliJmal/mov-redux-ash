import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ search, category }) => {
  const { moviesData } = useSelector((state) => state);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {moviesData
        .filter((el) => (category === "ALL" ? el : el.category === category))
        .filter((el) =>
          el.name.trim().toUpperCase().startsWith(search.trim().toUpperCase())
        )
        .map((el) => (
          <MovieCard el={el} key={el.id} />
        ))}
    </div>
  );
};

export default MovieList;
