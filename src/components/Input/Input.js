import React from "react";
import './Input.css';

function Input(props) {
  return (
    <>
      {props.componentName !== 'profile' ?
        <>
          <span className="login__title-input">{props.title}</span>
          <input
            required
            type={props.type}
            name={props.name}
            minLength={props.minLength || ''}
            className={`login__input ${props.isInputValid === undefined || props.isInputValid ? '' : 'login__input_invalid'}`}
            value={props.value || ''}
            onChange={props.onChange}
            disabled={props.isWait}
            pattern={props.pattern}
            placeholder={props.placeholder}
          />
          <span className='login__error-input' >{props.error}</span>
        </>
        :
        <>
          <label className="profile__label">
            <span className="profile__title-input">{props.title}</span>
            <input
              required
              type={props.type}
              name={props.name}
              minLength={props.minLength || ''}
              className={`profile__input ${props.isInputValid === undefined || props.isInputValid ? '' : 'profile__input_invalid'}`}
              value={props.value || ''}
              onChange={props.onChange}
              disabled={props.isWait || !props.isEdit}
              pattern={props.pattern}
              placeholder={props.placeholder}
            />
          <span className="profile__error-input">{props.error}</span>
          </label>
        </>
      }
    </>
  )
}

export default Input;
