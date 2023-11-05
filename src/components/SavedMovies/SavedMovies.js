import React from 'react';
// import { Link } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <section className="movies" aria-label="Фотогалерея фильмов">
      <SearchForm
        isWait={props.isWait}
        setIsWait={props.setIsWait}
        isError={props.isError}
        setIsError={props.setIsError}
      />
      <MoviesCardList
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
    </section>
  )
}

export default SavedMovies;
