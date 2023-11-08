import React, { useCallback, useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Moviies({setIsError, ...props}) {
  const [isListMovies, setIsListMovies] = useState([]);
  const [isSelectedMovies, setIsSelectedMovies] = useState([]);
  const [isSearchWord, setIsSearchWord] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const select = useCallback((word, isCheck, movies) => {
    localStorage.setItem('inputword', JSON.stringify(word));
    localStorage.setItem('shorts', JSON.stringify(isCheck));
    localStorage.setItem('lotmovies', JSON.stringify(movies));
    setIsSearchWord(word);
    setIsSelectedMovies(movies.filter((item) => {
      const searchMovies = item.nameRU.toLowerCase().includes(word.toLowerCase());
      return isCheck ? (searchMovies && item.duration <= 40) : searchMovies
    }))
  }, []);

  function searchMovies(word) {
    if (isListMovies.length === 0) {
      setIsLoading(true)
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
        .finally(() => setIsLoading(false))
    } else {
      select(word, isCheck, isListMovies)
    }
  }

  useEffect(() => {
    setIsError(false)
  }, [setIsError])

  useEffect(() => {
    if (localStorage.inputword && localStorage.shorts && localStorage.lotmovies) {
      const word = JSON.parse(localStorage.inputword)
      const isCheck = JSON.parse(localStorage.shorts)
      const movies = JSON.parse(localStorage.lotmovies)
      setIsServerError(false)
      setIsFirstSearch(false)
      setIsSearchWord(word)
      setIsCheck(isCheck)
      setIsListMovies(movies)
      select(word, isCheck, movies)
      // setFirstEntrance(false)
    }
  }, [select])


  return (
    <section className="movies" aria-label="Фотогалерея фильмов">
      <SearchForm
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        isSearchWord={isSearchWord}
        isListMovies={isListMovies}
        savedMovies={props.savedMovies}
        isError={props.isError}
        setIsError={setIsError}
        select={select}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        isSelectedMovies={isSelectedMovies}
        isServerError={isServerError}
        isLoading={isLoading}
        isFirstSearch={isFirstSearch}
        addMovie={props.addMovie}
        savedMovies={props.savedMovies}
      />
    </section>
  )
}

export default Moviies;
