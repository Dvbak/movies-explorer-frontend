import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import useFormValidation from '../../hooks/useFormValidtion';
import './Profile.css';

function Profile(props) {
  const[isLuck, setIsLuck] = useState(false);
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation();

  useEffect(() => {
    reset({ username: 'currentUser.name', email: 'currentUser.email' })
  }, [reset, props.isEdit]);

  // useEffect(() => {
  //   props.setIsError(false)
  // }, [props, props.setIsError, values]);

  function onSubmit(evt) {
    evt.preventDefault();
    props.setIsEdit(false);
    setIsLuck(true);
    props.setIsWait(true);
    // props.setIsError(!props.isError);
    // editUserData(values.username, values.email)
  }

  return (
    <section className="profile page__profile">
      <h2 className="profile__title">Привет, currentUser!</h2>
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
            props.setIsError(false)
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
            props.setIsError(false)
          }}
          isEdit={props.isEdit}
        />
        </fieldset>
        {!props.isEdit ?
        <>
          <span className={`profile__error-form ${props.isError ? 'profile__error-form_active' : isLuck ? 'profile__error-form-luke_active' : ''}`}>{props.isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="button"
            className="profile__btn"
            onClick={() => {
              props.setIsEdit(true);
              setIsLuck(false);
              // props.setIsError(false);
            }}
          >Редактировать</button>
        </> :
          <>
          <span className={`profile__error-form ${props.isError ? 'profile__error-form_active' : isLuck ? 'profile__error-form-luke_active' : ''}`}>{props.isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="submit"
            className="profile__btn-edit"
            disabled={!isValid || props.isError}
          >{props.isWait ? 'Ждите...' : 'Сохранить'}</button>
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
