import React from "react";
import Promo from '../Promo/Promo';
import Project from '../Project/Project';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/Aboutme';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import '../../assets/page.css';


function Main() {
  return (
    <main className="main page__main">
      <Promo />
      <Project />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
