import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

export const deleteMovie = (MovieID) => {
  return {
    type: DELETE_MOVIE,
    payload: MovieID,
  };
};

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};

export const editMovie = (editedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: editedMovie,
  };
};
