import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { data, dataSaved } from '../../utils/constants';

function MoviesCardList() {
  const { pathname } = useLocation()

  return (
    <>
      <ul className="movies__list page__movies-list">
        {pathname === '/movies' ?
          data.map(item => {
            return (
              <MoviesCard
                key={item.id}
                data={item}
              />
            )
          }) :
            dataSaved.map(item => {
              return (
                <MoviesCard
                key={item.id}
                data={item}
              />
              )
            })
        }
      </ul>
      <div className="movies__next">
        <button type="button" className="movies__next-btn">
          Ещё
        </button>
      </div>
    </>
  )
}

export default MoviesCardList;
