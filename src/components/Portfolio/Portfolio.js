import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          Статичный сайт
          <Link
            to={'https://github.com/Dvbak/how-to-learn'}
            className="portfolio__link"
            target="_blank"
          />
        </li>
        <li className="portfolio__item">
          Адаптивный сайт
          <Link
            to={'https://github.com/Dvbak/russian-travel'}
            className="portfolio__link"
            target="_blank"
          />
        </li>
        <li className="portfolio__item">
          Одностраничное приложение
          <Link
            to={'https://github.com/Dvbak/react-mesto-api-full-gha'}
            className="portfolio__link"
            target="_blank"
          />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
