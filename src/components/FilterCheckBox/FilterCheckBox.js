import React, { useState } from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
  const [click, setClick] = useState(false);

  function onClick() {
    if(!click) {
      setClick(true)
    } else {
      setClick(false)
    }
  };

  return (
    <label
      className="search-form__label"
      tabIndex={0}>
      <input type="checkbox" name="short films" className="search-form__checkbox" onClick={onClick}/>
      <svg
        className="search-form__svg-check"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={20}
        viewBox="0 0 36 20"
        fill="none"

      >
        <rect
          className={`search-form__svg-check-rect ${click ? 'search-form__svg-check-rect_active' : ''}`}
          width={36}
          height={20}
          rx={10}
          fill="#343434"
        />
        <circle
          className={`search-form__svg-check-circle ${click ? 'search-form__svg-check-circle_active' : ''}`}
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
