import React from "react";
import { HashLink } from "react-router-hash-link";
import image from '../../images/logo/promo-logo-min.svg';
import image_354 from '../../images/logo/promo-logo-small-min.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__inner">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб‑разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <HashLink smooth to='#projectAbout' className="promo__link">
          Узнать больше
        </HashLink>
      </div>
      <picture>
        <source
          srcSet={image_354}
          media="(max-width: 354px)"
        />
        <img
          src={image}
          alt="Земной шар"
          className="promo__image"
        />
      </picture>
    </section>
  )
}

export default Promo;
