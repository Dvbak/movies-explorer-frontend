import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
// import '../../assets/page.css';

function Footer() {
  return (
    <footer className="footer page__footer">
      <h2 className="footer__title">
        Учебный проект Яндекс. Практикум х BeatFilm.
      </h2>
      <div className="footer__inner">
        <p className="footer__copyright">©&nbsp;2023</p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link
              to={'https://practicum.yandex.ru/'}
              className="footer__link"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'https://github.com/'} className="footer__link" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer;
