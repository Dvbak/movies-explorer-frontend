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
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
      : props.name ==='signup' ?
      <Register
        name={props.name}
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
      : props.name === 'profile' ?
      <Profile
        name={props.name}
        isError={props.isError}
        setIsError={props.setIsError}
        isEdit={props.isEdit}
        setIsEdit={props.setIsEdit}
        logOut={props.logOut}
        isWait={props.isWait}
        setIsWait={props.setIsWait}
      />
      : props.name === 'movies' ?
      <Moviies
        isWait={props.isWait}
        setIsWait={props.setIsWait}
        isError={props.isError}
        setIsError={props.setIsError}
      />
      : props.name === 'savedmovies' ?
      <SavedMovies
        isWait={props.isWait}
        setIsWait={props.setIsWait}
        isError={props.isError}
        setIsError={props.setIsError}
      />
      : props.name === 'error404' &&
      <Error404/>
    }
    </main>
  )
}

export default Main;
