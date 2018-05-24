import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconArrowDown from './../../images/icon_arrow_down.svg';

require(`./Select.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Select = (props) => {
  const {
    className,
    onChange,
    onClick,
    options,
    ...other
  } = props;

  if (!options) return null;

  const optionList = options.map(i => (
    <option
      key={i.value}
      value={i.value}
    >
      {i.option}
    </option>
  ));

  const selectClasses = classNames(
    'nativeSelect',
    className,
  );

  const handleChange = (evt) => {
    onChange(evt);
  };

  const handleClick = (evt) => {
    onClick(evt);
  };

  return (
    <div className={selectClasses}>
      <i className="nativeSelect__icon">
        <img src={IconArrowDown} alt="v" />
      </i>
      <select
        className="nativeSelect__select"
        onChange={handleChange}
        onClick={handleClick}
        {...other}
      >
        {optionList}
      </select>
    </div>
  );
};


Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  onChange: () => {},
  onClick: () => {},
};

export default Select;
