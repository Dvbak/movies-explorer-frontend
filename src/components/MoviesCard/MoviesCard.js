import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import convertTime from '../../utils/convertTime';
import './MoviesCard.css';


function MoviesCard({savedMovies, data, ...props}) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(item => data.id === item.movieId))
  }, [pathname, data.id, savedMovies, setClick])

  function onClick() {
    if (savedMovies.some(item => data.id === item.movieId)) {
      setClick(true)
      props.addMovie(data)
    } else {
      setClick(false)
      props.addMovie(data)
    }
  }

  return (
    <li className="movies__card">
      <Link to={data.trailerLink} target='_blank' className="movies__link">
        <img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.nameRU} className="movies__img" />
      </Link>
      <div className="movies__box-subtitle">
        <div className="movies__inner-subtitle">
          <p className="movies__subtitle">{data.nameRU}</p>
          <span className="movies__duration">{convertTime(data.duration)}</span>
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
              onClick={() => props.onDelete(data._id)} />
         }
      </div>
    </li>

  )
}

export default MoviesCard;
