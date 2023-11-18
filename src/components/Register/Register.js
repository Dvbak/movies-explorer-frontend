import React from 'react';
import Input from '../Input/Input';
import SectionLogin from '../SectionLogin/SectionLogin';
import useFormValidation from '../../hooks/useFormValidtion';
import { EmailRegex, RegPassword } from '../../utils/constants';

function Register(props) {
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values.username, values.email, values.password)
  }

  return (
    <SectionLogin name={props.name} setIsError={props.setIsError} onSubmit={onSubmit} isValid={isValid} values={values}>
      <Input
        name='username'
        type='text'
        title='Имя'
        minLength='2'
        maxLength='30'
        defaultValue=""
        value={values.username}
        isInputValid={isInputValid.username}
        error={errors.username}
        onChange={(evt) => {
          handleChange(evt)
          props.setIsError(false)
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
          props.setIsError(false)
        }}
        pattern={EmailRegex}
        placeholder='Введите электронную почту'
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength='8'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={(evt) => {
          handleChange(evt)
          props.setIsError(false)
        }}
        pattern={RegPassword}
        placeholder='Введите пароль, не менее 8 букв или цифр'
      />
    </SectionLogin>
  )
}

export default Register;
