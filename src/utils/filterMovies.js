import { DurationShortMovie } from "./constants";

export function filterMovies(query, moviesArr) {
  return moviesArr.filter((movie) =>
    movie.nameRU.toLowerCase().includes(query.toLowerCase())
  );
};

export function findShortMovies(movies) {
  return movies.filter((movie) => movie.duration < DurationShortMovie);
};


