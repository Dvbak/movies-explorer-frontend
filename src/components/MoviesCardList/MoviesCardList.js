import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { DesctopScreen, MobileScreen, TabletScreen } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import showCards from '../../utils/showCards';

function MoviesCardList({isSelectedMovies, ...props}) {
  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const show = isSelectedMovies.slice(0, count);

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(showCards().lot)
      function showCardsForResize() {
        if (window.innerWidth >= DesctopScreen) {
          setCount(showCards().lot)
        }
        if (window.innerWidth < DesctopScreen) {
          setCount(showCards().lot)
        }
        if (window.innerWidth < TabletScreen) {
          setCount(showCards().lot)
        }
        if (window.innerWidth < MobileScreen) {
          setCount(showCards().lot)
        }
      }
      window.addEventListener('resize', showCardsForResize);
      return () => window.removeEventListener('resize', showCardsForResize);
    }
  }, [pathname, isSelectedMovies]);

  function clickNext() {
    setCount(count + showCards().step);
  }

  return (
    <>
      {props.isWait ? <Preloader />
        : (pathname === '/movies' && show.length !== 0) ?
        <ul className="movies__list">
          {show.map(item => {
            return (
              <MoviesCard
                key={item.id}
                savedMovies={props.savedMovies}
                addMovie={props.addMovie}
                data={item} />)
            })
          }
        </ul>
        : (pathname === '/saved-movies' && isSelectedMovies.length !== 0) ?
          <ul className="movies__list">
          {isSelectedMovies.map(item => {
            return (
              <MoviesCard
                key={item._id}
                onDelete={props.onDelete}
                data={item} />)
            })
          }
          </ul>
          : props.isServerError ?
          <span className='movies__search-return'>«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»</span>
          : !props.isFirstSearch  ?
          <span className='movies__search-return'>«По этому запросу ничего не найдено»</span>
          : pathname === '/movies' ?
          <span className='movies__search-return'>«Выполните поиск фильмов»</span>
          :
          <span className='movies__search-return'>«У Вас нет сохранённых фильмов»</span>
      }
      <div className="movies__next">
        {(pathname === '/movies' && !props.isWait && !props.isServerError) && <button
          type="button"
          className={`movies__next-btn ${count >= isSelectedMovies.length && 'movies__next-btn_hidden'}`}
          onClick={clickNext}
          >Ещё</button>}
      </div>
    </>
  )
}

export default MoviesCardList;
