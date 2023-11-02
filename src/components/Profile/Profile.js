import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import useFormValidation from '../../hooks/useFormValidtion';
import './Profile.css';

function Profile(props) {
  const isError = false;
  // const [isEdit, setIsEdit] = useState(false);
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation();

  useEffect(() => {
    reset({ username: 'currentUser.name', email: 'currentUser.email' })
  }, [reset, props.isEdit]);

  function onSubmit(evt) {
    evt.preventDefault()
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
          onChange={handleChange}
          isEdit={props.isEdit}
          // isEdit={isEdit}
        />
        <Input
          componentName={props.name}
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          onChange={handleChange}
          isEdit={props.isEdit}
          // isEdit={isEdit}
        />
        </fieldset>
        {!props.isEdit ?
        // {!isEdit ?
        <>
          <span className={`profile__error-form ${isError && 'profile__error-form_active'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="button"
            className="profile__btn"
            onClick={() => {
              props.setIsEdit(true);
              // setIsEdit(true);
            }}
          >Редактировать</button>
        </> :
          <>
          <span className={`profile__error-form ${isError && 'profile__error-form_active'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Обновление профиля прошло успешно'}</span>
          <button
            type="submit"
            className="profile__btn-edit"
            onClick={() => {
              props.setIsEdit(false);
              // setIsEdit(false);
            }}
            disabled={!isValid || isError}
          >Сохранить</button>
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
