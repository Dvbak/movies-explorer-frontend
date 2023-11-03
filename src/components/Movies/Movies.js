import React from 'react';
// import { Link } from "react-router-dom";
// import './Moviies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

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
      <Footer />
    </>
  )
}

export default Moviies;
