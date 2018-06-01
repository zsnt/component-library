import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';

require(`./Diamond.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Diamond = (props) => {
  const {
    active,
    as,
    kind,
    type,
    className,
    iconUrl,
    ...other
  } = props;

  const iconClasses = classNames(
    'diamond__icon',
    `diamond__icon--${type}`,
  );

  const ElementType = (as && as !== Diamond.defaultProps.as) ? as : Diamond.defaultProps.as;

  const diamondClasses = classNames(
    'diamond',
    `diamond__${kind}`,
    `diamond--${type}`,
    { 'diamond--active': active },
    className,
  );

  return (
    <ElementType className={diamondClasses} {...other}>
      <SVG
        src={iconUrl}
        className={iconClasses}
      />
    </ElementType>
  );
};

Diamond.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.string,
  kind: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
};

Diamond.defaultProps = {
  active: false,
  as: 'div',
  kind: 'entity',
  type: 'house',
  className: '',
  iconUrl: '',
};

export default Diamond;
