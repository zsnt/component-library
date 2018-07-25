import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import Card from '../Card/Card';
import IconCross from '../../images/icon_cross.svg';

require(`./Dialog.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Dialog = (props) => {
  const {
    show,
    title,
    onClose,
    children,
    active,
    setInactive,
    ...other
  } = props;

  if (!show) {
    return null;
  }

  return (
    <Card
      className="dialog"
      {...other}
    >
      <Card.Header className="dialog__header">
        {title}
        <button
          className="dialog__close"
          onClick={onClose}
        >
          <SVG src={IconCross} />
        </button>
      </Card.Header>
      {children}
    </Card>
  );
};

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  show: PropTypes.bool,
  title: PropTypes.string,
  active: PropTypes.bool,
  setInactive: PropTypes.func,
};

Dialog.defaultProps = {
  children: undefined,
  show: false,
  title: '',
  active: false,
  setInactive: () => {},
};

export default Dialog;
