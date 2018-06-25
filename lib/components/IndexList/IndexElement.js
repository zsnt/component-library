import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const IndexElement = (props) => {
  const {
    entry,
    actions,
    className,
    children,
    ...other
  } = props;

  const IndexElementClasses = classNames(
    'indexList__element',
    className,
  );

  const actionButtons = actions.map(action => (
    <Button
      type="icon"
      icon={action.icon}
      onClick={action.callback}
      label={action.label}
    />
  ));

  return (
    <div className={IndexElementClasses} {...other}>
      <div className="indexList__entry">
        {entry}
      </div>
      <Navigation>
        {actionButtons}
      </Navigation>
    </div>
  );
};

IndexElement.propTypes = {
  entry: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.shape({
    callback: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.string,
  })),
  className: PropTypes.string,
  children: PropTypes.node,
};

IndexElement.defaultProps = {
  className: '',
  entry: undefined,
  actions: undefined,
  children: undefined,
};

export default IndexElement;
