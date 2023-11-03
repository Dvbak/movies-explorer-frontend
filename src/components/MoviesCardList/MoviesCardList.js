import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { data, dataSaved } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const { pathname } = useLocation()

  return (
    <>
      {props.isWait ? <Preloader /> :
        pathname === '/movies' ?
        <ul className="movies__list page__movies-list">
          {data.map(item => {
            return (
              <MoviesCard
                key={item.id}
                data={item}
              />)
            })
          }
        </ul> :
          <ul className="movies__list page__movies-list">
          {dataSaved.map(item => {
            return (
              <MoviesCard
                key={item.id}
                data={item}
              />)
            })
          }
          </ul>
      }
      <div className="movies__next">
        {(pathname === '/movies' && !props.isWait) && <button type="button" className={`movies__next-btn`}>
          Ещё
        </button>}
      </div>
    </>
  )
}

export default MoviesCardList;
