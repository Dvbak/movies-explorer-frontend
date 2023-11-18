import React from "react";
import Promo from '../Promo/Promo';
import Project from '../Project/Project';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/Aboutme';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import '../../assets/page.css';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Moviies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error404 from "../Error404/Error404";


function Main(props) {
  return (
    <main className="main page__center">
    {
      props.name === 'home' ?
      <>
        <Promo />
        <Project />
        <Techs />
        <AboutMe />
        <Portfolio />
      </>
      : props.name === 'signin' ?
      <Login
        name={props.name}
        onLogin={props.onLogin}
        setIsError={props.setIsError}
      />
      : props.name ==='signup' ?
      <Register
        name={props.name}
        onRegister={props.onRegister}
        setIsError={props.setIsError}
      />
      : props.name === 'profile' ?
      <Profile
        name={props.name}
        logOut={props.logOut}
        setCurrentUser={props.setCurrentUser}
        setIsError={props.setIsError}
        setIsWait={props.setIsWait}
        isEdit={props.isEdit}
        setIsEdit={props.setIsEdit}
        isLuck={props.isLuck}
        setIsLuck={props.setIsLuck}
      />
      : props.name === 'movies' ?
      <Moviies
        savedMovies={props.savedMovies}
        addMovie={props.addMovie}
        setIsWait={props.setIsWait}
        setIsError={props.setIsError}
      />
      : props.name === 'savedmovies' ?
      <SavedMovies
        savedMovies={props.savedMovies}
        onDelete={props.onDelete}
        setIsError={props.setIsError}
      />
      : props.name === 'error404' &&
      <Error404/>
    }
    </main>
  )
}

export default Main;
