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
      if (props.handleSelect)
        props.handleSelect(value);
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
            <div className="actions">{val}</div>
            :
            <div className={`actions ${open ? 'open' : ''}`}
              onClick={e => {
                this.setState({ open: open ? false : true });
              }}
            >
              {val}
              <img src={Icons.triangleDown} />
              {open && <div className="list">
                {
                  options.map((option, index) => (
                    <div key={index} className="action"
                      onClick={e => this.handleSelect(option.value)}
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
};

export default DropDown;