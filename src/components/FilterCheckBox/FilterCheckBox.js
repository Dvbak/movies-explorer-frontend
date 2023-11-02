import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <label className="search-form__label" tabIndex={0}>
      <input type="checkbox" name="short films" className="search-form__checkbox" />
      <svg
        className="search-form__svg-check"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={20}
        viewBox="0 0 36 20"
        fill="none"
      >
        <rect
          className="search-form__svg-check-rect"
          width={36}
          height={20}
          rx={10}
          fill="#343434"
        />
        <circle
          className="search-form__svg-check-circle"
          cx={10}
          cy={10}
          r={8}
          fill="#A0A0A0"
        />
      </svg>
      <span className="search-form__label-text">Короткометражки</span>
    </label>
  )
}

export default FilterCheckBox;
