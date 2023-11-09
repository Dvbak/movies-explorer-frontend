import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, setIsError, ...props}) {
  const [isSelectedMovies, setIsSelectedMovies] = useState(savedMovies);
  const [isSearchWord, setIsSearchWord] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const select = useCallback((word, isCheck, movies) => {
    setIsSearchWord(word);
    setIsSelectedMovies(movies.filter((item) => {
      const searchMovies = item.nameRU.toLowerCase().includes(word.toLowerCase());
      return isCheck ? (searchMovies && item.duration <= 40) : searchMovies
    }))
  }, []);

  function searchMovies(word) {
    setIsFirstSearch(false);
    select(word, isCheck, savedMovies);
  }

  useEffect(() => {
    setIsError(false)
  }, [setIsError])

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsFirstSearch(true)
    } else {
      setIsFirstSearch(false)
    }
    select(isSearchWord, isCheck, savedMovies)
  }, [select, isCheck, isSearchWord, savedMovies])

  return (
    <section className="movies" aria-label="Фотогалерея фильмов">
      <SearchForm
        isCheck={isCheck}
        isSearchWord={isSearchWord}
        setIsCheck={setIsCheck}
        isListMovies={isSelectedMovies}
        savedMovies={savedMovies}
        movies={savedMovies}
        isError={props.isError}
        setIsError={setIsError}
        select={select}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        isSelectedMovies={isSelectedMovies}
        isFirstSearch={isFirstSearch}
        onDelete={props.onDelete}
      />
    </section>
  )
}

export default SavedMovies;
