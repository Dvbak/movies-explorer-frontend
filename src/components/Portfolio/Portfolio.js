import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';
import logoArrow from '../../images/logo/logo-arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link
            to="https://github.com/Dvbak/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            Статичный сайт
            <img
              src={logoArrow}
              alt="Стрелка указательная"
              className="portfolio__link-image"
            />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://github.com/Dvbak/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            Адаптивный сайт
            <img
              src={logoArrow}
              alt="Стрелка указательная"
              className="portfolio__link-image"
            />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://github.com/Dvbak/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            Одностраничное приложение
            <img
              src={logoArrow}
              alt="Стрелка указательная"
              className="portfolio__link-image"
            />
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
