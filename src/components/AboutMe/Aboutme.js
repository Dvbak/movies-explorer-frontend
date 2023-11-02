import React from "react";
import { Link } from "react-router-dom";
import photo from '../../images/foto-about-me.png';
import photo_544 from '../../images/foto-about-me_544.png';
import photo_768 from '../../images/foto-about-me_768.png';
import './Aboutme.css';


function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__headline">Студент</h3>
      <div className="about-me__inner">
        <div className="about-me__box">
          <h2 className="about-me__title">Виталий</h2>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
            начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.
          </p>
          <Link to={'https://github.com/'} className="about-me__link" target="_blank">
            Github
          </Link>
        </div>
        <picture>
          <source
            srcSet={photo_544}
            media="(max-width: 544px)"
          />
          <source
            srcSet={photo_768}
            media="(max-width: 768px)"
          />
          <img
            src={photo}
            alt="Фотография студента"
            className="about-me__image"
          />
        </picture>
      </div>
    </section>
  )
}

export default AboutMe;
