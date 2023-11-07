import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import useFormValidation from '../../hooks/useFormValidtion';
import './Profile.css';
import CurrentUserContext from "../../context/CurrentUserContext";
import ErrorContext from "../../context/ErrorContext";
import WaitContext from "../../context/WaitContext";
import mainApi from "../../utils/MainApi";

function Profile({setIsError, setIsEdit, setIsLuck, ...props}) {
  const currentUser = useContext(CurrentUserContext);
  const isError = useContext(ErrorContext);
  const isWait = useContext(WaitContext);
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation();

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email })
    console.log(currentUser.name);
  }, [reset, currentUser, props.isEdit]);

  useEffect(() => {
    setIsError(false)
  }, [setIsError, values]);

  function handleProfile(username, email) {
    props.setIsWait(true)
    mainApi.setUserInfo(username, email, localStorage.token)
      .then(res => {
        props.setCurrentUser(res);
        setIsEdit(false);
        setIsLuck(true);
        console.log(currentUser.name);
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка редактирования профиля: ${err}`)
      })
      .finally(() => props.setIsWait(false))
  }

  function onSubmit(evt) {
    evt.preventDefault();
    // props.onEditProfile(values.username, values.email);
    handleProfile(values.username, values.email);
  }

  return (
    <section className="profile page__profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form onSubmit={onSubmit} className="profile__form" noValidate>
        <fieldset className="profile__fieldset">
          <Input
          componentName={props.name}
          name='username'
          type='text'
          title='Имя'
          minLength='3'
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          // onChange={handleChange}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
          isEdit={props.isEdit}
        />
        <Input
          componentName={props.name}
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          // onChange={handleChange}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
          isEdit={props.isEdit}
        />
        </fieldset>
        {!props.isEdit ?
        <>
          <span className={`profile__error-form ${isError ? 'profile__error-form_active' : props.isLuck ? 'profile__error-form-luke_active' : ''}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="button"
            className="profile__btn"
            onClick={() => {
              setIsEdit(true);
              setIsLuck(false);
            }}
          >Редактировать</button>
        </> :
          <>
          <span className={`profile__error-form ${isError ? 'profile__error-form_active' : props.isLuck ? 'profile__error-form-luke_active' : ''}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="submit"
            className="profile__btn-edit"
            disabled={!isValid || isWait || isError}
          >{isWait ? 'Ждите...' : 'Сохранить'}</button>
        </>
        }
      </form>
      <Link to={'/'} onClick={props.logOut} className="profile__link">
        Выйти из аккаунта
      </Link>
    </section>
  )
}

export default Profile;
