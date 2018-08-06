import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Icons } from '../Icon';

require(`./DropDown.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class DropDown extends React.Component {
  state = {
    open: false,
  }

  handleSelect(value) {
    return e => {
      this.props.onChange(value);
    }
  }

  render() {
    const props = this.props;
    const { open } = this.state;

    const {
      type,
      label,
      value,
      options,
      className,
      children,
      ...other
    } = props;

    const classes = classNames(
      'dropdown',
      `dropdown-${type}`,
      className,
    );

    let val = value;
    if (type === 'list') {
      val = options.find(option => option.value === value);
      val = val ? val.label : `Select ...`;
    }

    return (
      <div className={classes} {...other}>
        {label && <div className="label">{label}:</div>}
        {
          type === 'flat' ?
            <div className="actions" onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              props.onClick(e);
            }}>{val}</div>
            :
            <div className={`actions ${open ? 'open' : ''}`}
              onClick={e => {
                this.setState({ open: open ? false : true });
              }}
            >
              {open &&<div className='out-side' onClick={e => this.setState({ open: false })} />}
              {val}
              <img src={Icons.triangleDown} />
              {open && <div className="list">
                {
                  options.map((option, index) => (
                    <div key={index} className="action"
                      onClick={this.handleSelect(option.value)}
                    >
                      {option.label}
                    </div>
                  ))
                }
              </div>
              }
            </div>
        }
      </div>
    );
  }
}

DropDown.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

DropDown.defaultProps = {
  type: 'flat',
  value: 'Value',
  options: [
    { value: 'administrator', label: 'Administrator' },
    { value: 'stunden', label: 'Stunden' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  className: '',
  onClick: () => { },
  onChange: () => { },
};

export default DropDown;
