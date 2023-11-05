import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoAccount from '../../images/logo/logo-icon-main.svg';
import './Navigation.css';

function Navigation(props) {
const { pathname } = useLocation();


  return (
    <div className={`navigation ${props.isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__box">
        <button type="button" className="navigation__btn-close" onClick={props.onClose} />
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to={'/'} className={`navigation__link ${pathname === '/' ? 'navigation__link_active' : ''}`} onClick={props.onClose}>
              Главная
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={'/movies'} className={`navigation__link ${pathname === '/movies' ? 'navigation__link_active' : ''}`} onClick={props.onClose}>
              Фильмы
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={'/saved-movies'} className={`navigation__link ${pathname === '/saved-movies' ? 'navigation__link_active' : ''}`} onClick={props.onClose}>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Link to={'/profile'} className={`navigation__account ${pathname === '/profile' ? 'navigation__account_active' : ''}`} onClick={props.onClose}>
          Аккаунт
          <img
            src={logoAccount}
            alt="Пиктограмма человека"
            className="navigation__pic"
          />
        </Link>
      </div>
    </div>
  )
}

export default Navigation;
