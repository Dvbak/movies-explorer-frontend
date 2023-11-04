import React from 'react';
// import { Link } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Moviies(props) {
  return (
    <>
      <SearchForm
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
      <MoviesCardList
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
    </>
  )
}

export default Moviies;
