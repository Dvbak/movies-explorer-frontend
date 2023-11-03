import React from 'react';
import SectionLogin from '../SectionLogin/SectionLogin';
import Input from '../Input/Input';
import useFormValidation from '../../hooks/useFormValidtion';

function Login(props) {
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault();
    props.setIsWait(true);
    // props.onLogin(values.email, values.password)
  }

  return (
    <SectionLogin name={props.name} onSubmit={onSubmit} isValid={isValid} isWait={props.isWait}>
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
        placeholder='Введите свою электронную почту'
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
        placeholder='Введите свой пароль'
      />
    </SectionLogin>
  )
}

export default Login;
