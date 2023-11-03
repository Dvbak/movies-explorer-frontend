import React from 'react';
import Input from '../Input/Input';
import SectionLogin from '../SectionLogin/SectionLogin';
import useFormValidation from '../../hooks/useFormValidtion';

function Register(props) {
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault();
    props.setIsWait(true);
    // props.onRegister(values.username, values.email, values.password)
  }

  return (
    <SectionLogin name={props.name} onSubmit={onSubmit} isValid={isValid} isWait={props.isWait}>
      <Input
        name='username'
        type='text'
        title='Имя'
        minLength='3'
        defaultValue=""
        value={values.username}
        isInputValid={isInputValid.username}
        error={errors.username}
        onChange={(evt) => {
          handleChange(evt)
          // props.setIsError(false)
        }}
        placeholder='Введите имя'
      />
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={(evt) => {
          handleChange(evt)
          // props.setIsError(false)
        }}
        placeholder='Введите электронную почту'
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength='3'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={(evt) => {
          handleChange(evt)
          // props.setIsError(false)
        }}
        placeholder='Введите пароль'
      />
    </SectionLogin>
  )
}

export default Register;
