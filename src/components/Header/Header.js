import React, { useState, useEffect } from "react";
// import { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import LinkHome from "../LinkHome/LinkHome";
import Navigation from "../Navigation/Navigation";
import logoAccount from '../../images/logo/logo-icon-main.svg';
import logoAccountHome from '../../images/logo/logo-icon-main-bc.svg';
import './Header.css';
// import CurrentUserContext from "../../context/CurrentUserContext";

function Header({setIsEdit, setIsLuck,...props}) {
  const { pathname } = useLocation();
  // const currentUser = useContext(CurrentUserContext)
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  useEffect(() => {
      if (pathname === '/profile') {
        setIsEdit(false)
        setIsLuck(false)
      }
    }, [setIsLuck, setIsEdit, pathname])

  function handleClick() {
    if(isOpenBurgerMenu) {
      setIsOpenBurgerMenu(false);
    } else {
      setIsOpenBurgerMenu(true);
    }
  }

  function onClick() {
    if(props.isEdit) {
      setIsEdit(false);
      props.setIsError(false);
    } else if (props.isLuck) {
      setIsLuck(false);
    }
  }

  return (
    <header className={`header page__center ${props.name === 'home' ? 'page__color' : ''}`}>
      <LinkHome className={'header__link-home'} />
      {props.name === 'home' && !props.loggedIn ?
        <nav className="header__nav-logout" >
          <Link to={'/signup'} className="header__link-logout">Регистрация</Link>
          <Link to={'/signin'} className="header__enter">Войти</Link>
        </nav>
        :
          <>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <Link
                    to={'/movies'}
                    className={`header__link ${pathname === '/movies' ? 'header__link_active' : ''}`}
                  >Фильмы
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to={'/saved-movies'}
                    className={`header__link ${pathname === '/saved-movies' ? 'header__link_active' : ''}`}
                    >Сохраненные фильмы
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to={'/profile'}
              className="header__account"
              onClick={onClick}
              >
              Аккаунт
              {/* {currentUser.name} */}
              <img
                src={props.name !== 'home' ? logoAccount : logoAccountHome}
                alt="Пиктограмма человека"
                className="header__pic"
              />
            </Link>
            <button type="button" className="header__burger" onClick={handleClick}/>
            <Navigation
              isOpen = {isOpenBurgerMenu}
              // onClose = {closeBurgerMenu}
              onClose = {handleClick}
            />
          </>
      }
    </header>
  )
}

export default Header;
