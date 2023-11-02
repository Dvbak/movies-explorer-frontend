import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './MoviesCard.css';


function MoviesCard(props) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  function onClick() {
    if(!click) {
      setClick(true)
    } else {
      setClick(false)
    }
  };

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  };

  return (
    <li className="movies__card">
      <Link to={props.data.trailerLink} target='_blank' className="movies__link">
        <img src={props.data.image} alt={props.data.name} className="movies__img" />
      </Link>
      <div className="movies__box-subtitle">
        <div className="movies__inner-subtitle">
          <p className="movies__subtitle">{props.data.nameRU}</p>
          <span className="movies__duration">{convertTime(props.data.duration)}</span>
        </div>
        {pathname === '/movies' ?
          <button
            type="button"
            className={`movies__save ${click ? 'movies__save_active' : ''}`}
            onClick={onClick} />
            :
            <button
              type="button"
              className={`movies__save movies__save_delete`}
              onClick={onClick} />
         }
      </div>
    </li>

  )
}

export default MoviesCard;
