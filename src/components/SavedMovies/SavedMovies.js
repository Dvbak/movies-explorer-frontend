import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, setIsError, ...props}) {
  const [isSelectedMovies, setIsSelectedMovies] = useState(savedMovies);
  const [isSearchWord, setIsSearchWord] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const select = useCallback((word, isCheck, movies) => {
    setIsSearchWord(word);
    setIsSelectedMovies(movies.filter((item) => {
      const searchMovies = item.nameRU.toLowerCase().includes(word.toLowerCase());
      return isCheck ? (searchMovies && item.duration <= 40) : searchMovies
    }))
  }, []);

  function searchMovies(word) {
    select(word, isCheck, savedMovies);
  }

  useEffect(() => {
    setIsError(false)
  }, [setIsError])

  useEffect(() => {
    select(isSearchWord, isCheck, savedMovies)
  }, [select, isCheck, isSearchWord, savedMovies])

  return (
    <section className="movies" aria-label="Фотогалерея фильмов">
      <SearchForm
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        isListMovies={isSelectedMovies}
        savedMovies={savedMovies}
        isError={props.isError}
        setIsError={setIsError}
        select={select}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        isSelectedMovies={savedMovies}
        onDelete={props.onDelete}
      />
    </section>
  )
}

export default SavedMovies;
