import './FilterCheckBox.css';

function FilterCheckBox(props) {
  function onChange() {
    props.checkShort();
  }

  return (
    <label
      className={`search-form__label ${props.isError ? 'search-form__label-disabled' : ''}`}
      tabIndex={0}>
      <input type="checkbox" name="short films" className="search-form__checkbox" onChange={onChange} />
      <svg
        className="search-form__svg-check"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={20}
        viewBox="0 0 36 20"
        fill="none"

      >
        <rect
          className={`search-form__svg-check-rect ${props.isCheck ? 'search-form__svg-check-rect_active' : ''}`}
          width={36}
          height={20}
          rx={10}
          fill="#343434"
        />
        <circle
          className={`search-form__svg-check-circle ${props.isCheck ? 'search-form__svg-check-circle_active' : ''}`}
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
