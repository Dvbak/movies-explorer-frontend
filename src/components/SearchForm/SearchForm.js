import React, { useContext, useEffect } from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import useFormValidation from '../../hooks/useFormValidtion';
import './SearchForm.css';
import ErrorContext from '../../context/ErrorContext';
import { useLocation } from 'react-router-dom';

function SearchForm({savedMovies, isSearchWord, ...props}) {
  const { pathname } = useLocation();
  const isError = useContext(ErrorContext);
  const { values, handleChange, reset } = useFormValidation();

  useEffect(() => {
    if(pathname === '/saved-movies' && savedMovies === 0) {
      reset({ search: '' })
    } else {
      reset({ search: isSearchWord })
    }
  }, [reset, pathname, savedMovies, isSearchWord]);


  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.search.value) {
      props.searchMovies(evt.target.search.value);
      props.setIsError(false);
    } else {
      props.setIsError(true);
    }
  }

  function checkShort() {
    if (props.isCheck) {
      props.setIsCheck(false);
      props.setIsError(false);
      props.select(values.search, false, props.movies);
    } else {
      props.setIsCheck(true);
      props.setIsError(false);
      props.select(values.search, true, props.movies);
    }
  }

  return (
    <div className="search-form">
      <form onSubmit={onSubmit} className="search-form__form" noValidate>
        <input
          required
          type="text"
          name="search"
          placeholder="Фильм"
          value={values.search || ''}
            onChange={(evt) => {
              handleChange(evt)
              props.setIsError(false)
            }}
          disabled={savedMovies ? (savedMovies.length === 0 && pathname === '/saved-movies') : false}
          className="search-form__input"
        />
        <button type="submit" className="search-form__submit">
          <svg
            className="search-form__submit-svg"
            width={34}
            height={33}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="search-form__submit-svg-rect"
              width={34}
              height={34}
              rx={17}
              fill="#4285F4"
            />
            <path
              className="search-form__submit-svg-path"
              d="M15 23L20 17L15 11"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <span className={`search-form__error ${isError && 'search-form__error_active'}`}>{'Введите ключевую фразу'}</span>
      <FilterCheckBox
        isCheck={props.isCheck}
        checkShort={checkShort}
      />
    </div>
  )
}

export default SearchForm;
