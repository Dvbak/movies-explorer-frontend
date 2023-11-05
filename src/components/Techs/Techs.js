import React from "react";
import { Link } from "react-router-dom";
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h3 className="techs__subtitle">Технологии</h3>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном
        проекте.
      </p>
      <ul className="techs__inner">
        <li className="techs__item">
          <Link to={'https://developer.mozilla.org/ru/docs/Glossary/HTML'}
          className="techs__link"
          target="_blank">
            HTML
          </Link>
        </li>
        <li className="techs__item">
          <Link
            to={'https://developer.mozilla.org/ru/docs/Glossary/CSS'}
            className="techs__link"
            target="_blank"
          >
            CSS
          </Link>
        </li>
        <li className="techs__item">
          <Link
            to={'https://developer.mozilla.org/ru/docs/Glossary/JavaScript'}
            className="techs__link"
            target="_blank"
          >
            JS
          </Link>
        </li>
        <li className="techs__item">
          <Link
            to={'https://ru.legacy.reactjs.org/'}
            className="techs__link"
            target="_blank"
          >
            React
          </Link>
        </li>
        <li className="techs__item">
          <Link to={'https://git-scm.com/'} className="techs__link" target="_blank">
            Git
          </Link>
        </li>
        <li className="techs__item">
          <Link
            to={'https://expressjs.com/ru/'}
            className="techs__link"
            target="_blank"
          >
            Express.js
          </Link>
        </li>
        <li className="techs__item">
          <Link
            to={'https://www.mongodb.com/'}
            className="techs__link"
            target="_blank"
          >
            mongoDB
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Techs;
