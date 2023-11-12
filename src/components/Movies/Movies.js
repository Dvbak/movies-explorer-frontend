import React, { useCallback, useState, useEffect, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import WaitContext from '../../context/WaitContext';
import putInLocalStorage from '../../utils/putInLocalStorage';
import { filterMovies, findShortMovies } from '../../utils/filterMovies';

function Moviies({setIsError, ...props}) {
  const isWait = useContext(WaitContext);
  const [isListMovies, setIsListMovies] = useState([]);
  const [isSelectedMovies, setIsSelectedMovies] = useState([]);
  const [isSearchWord, setIsSearchWord] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const select = useCallback((word, isCheck, movies) => {
    putInLocalStorage(word, isCheck, movies);
    setIsSearchWord(word);
    setIsSelectedMovies(
      !isCheck ? filterMovies(word, movies)
      : findShortMovies(filterMovies(word, movies)))
  }, []);

  function searchMovies(word) {
    if (isListMovies.length === 0) {
      props.setIsWait(true)
      moviesApi.getMovies()
        .then((res) => {
          setIsListMovies(res);
          setIsCheck(false);
          setIsServerError(false);
          setIsFirstSearch(false);
          select(word, isCheck, res);
        })
        .catch(err => {
          setIsServerError(true);
          console.error(`Ошибка при поиске фильмов- ${err}`)
        })
        .finally(() => props.setIsWait(false))
    } else {
      select(word, isCheck, isListMovies)
    }
  }

  useEffect(() => {
    setIsError(false)
  }, [setIsError])

  useEffect(() => {
    if (localStorage.key_1 && localStorage.key_2 && localStorage.key_3) {
      const word = JSON.parse(localStorage.key_1);
      const isCheck = JSON.parse(localStorage.key_2);
      const movies = JSON.parse(localStorage.key_3);
      setIsServerError(false);
      setIsFirstSearch(false);
      setIsSearchWord(word);
      setIsCheck(isCheck);
      setIsListMovies(movies);
      select(word, isCheck, movies);
    }
  }, [select])

  return (
    <section className="movies" aria-label="Фотогалерея фильмов">
      <SearchForm
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        isSearchWord={isSearchWord}
        movies={isListMovies}
        savedMovies={props.savedMovies}
        // isError={props.isError}
        setIsError={setIsError}
        select={select}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        isSelectedMovies={isSelectedMovies}
        isServerError={isServerError}
        isFirstSearch={isFirstSearch}
        isWait={isWait}
        addMovie={props.addMovie}
        savedMovies={props.savedMovies}
        onDelete={props.onDelete}
      />
    </section>
  )
}

export default Moviies;
