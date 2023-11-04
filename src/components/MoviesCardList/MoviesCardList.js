import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { DesctopScreen, MobileScreen, TabletScreen, data, dataSaved } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import showCards from '../../utils/showCards';

function MoviesCardList(props) {
  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const show = data.slice(0, count);

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
  }, [pathname]);

  function clickNext() {
    setCount(count + showCards().step);
  }

  return (
    <>
      {props.isWait ? <Preloader /> :
        (pathname === '/movies' && show.length !== 0) ?
        <ul className="movies__list">
          {show.map(item => {
            return (
              <MoviesCard
                key={item.id}
                data={item}
              />)
            })
          }
        </ul> :
          <ul className="movies__list">
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
        {(pathname === '/movies' && !props.isWait) && <button
          type="button"
          className={`movies__next-btn ${count >= data.length && 'movies__next-btn_hidden'}`}
          onClick={clickNext}
          >Ещё</button>}
      </div>
    </>
  )
}

export default MoviesCardList;
