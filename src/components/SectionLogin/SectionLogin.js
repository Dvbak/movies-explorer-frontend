import React from "react";
import LinkHome from '../LinkHome/LinkHome';
import { Link } from "react-router-dom";
import './SectionLogin.css';

function SectionLogin(props) {
  const isError = false;

  return (
    <section className="page__login login">
      <LinkHome className={'login__link-home'} />
      <h2 className="login__title">{props.name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
      <form onSubmit={props.onSubmit} className="login__form" noValidate>
        <fieldset className="login__fieldset">
          {props.children}
        </fieldset>
        <span className={`login__error-form ${isError && 'login__error-form_active'}`}>{props.name === 'signin' ? 'При авторизации произошла ошибка.' : 'При регистрации пользователя произошла ошибка.'}</span>
        <button
          type="submit"
          className="login__btn"
          disabled={!props.isValid}>
          {props.isWait ? 'Ждите...' : props.name === 'signin' ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
      {props.name === 'signin' ?
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link to={'/signup'} className="login__link">
            Регистрация
          </Link>
        </p>
        : <p className="login__text">
            Уже зарегистрированы?
            <Link to={'/signin'} className="login__link">
              Войти
            </Link>
          </p>
      }
    </section>
  )
}

export default SectionLogin;
