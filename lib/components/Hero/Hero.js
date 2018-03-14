import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Headline from '../Headline/Headline';

require(`./Hero.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const getHeadline = (text, type) => {
  if (text && text !== '') {
    return <Headline type={type}>{text}</Headline>;
  }
  return '';
};

const Hero = (props) => {
  const {
    titleText,
    subtitleText,
    className,
    children,
    ...other
  } = props;

  const HeroClasses = classNames(
    'hero',
    className,
  );

  const title = getHeadline(titleText, 'h1');
  const subTitle = getHeadline(subtitleText, 'subtitle');

  return (
    <section className={HeroClasses} {...other}>
      {title}
      {subTitle}
      {children}
    </section>
  );
};


Hero.propTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  titleText: '',
  subtitleText: '',
  children: undefined,
  className: '',
};

export default Hero;
