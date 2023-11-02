import React from 'react';
// import { Link } from "react-router-dom";
// import './Moviies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Moviies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Moviies;
