import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'rc-slider/lib/Slider';
import createSliderWithTooltip from 'rc-slider/lib/createSliderWithTooltip';

require(`./Slider.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const setMarks = (props) => {
  const {
    max,
    min,
    markerDistance,
    unit
  } = props;

  const marks = {
    [min]: {label: <i className='marker marker--min'>{min}{unit}</i>},
    [max]: {label: <i className='marker marker--max'>{max}{unit}</i>}
  }

  if(markerDistance >0){
    for( var i = min+markerDistance; i < max; i+=markerDistance) {
      marks[i]= {label: <i className='marker'></i>};
    }
  }
  return marks;
}



const SliderComp = (props) => {

  const SliderTooltip = createSliderWithTooltip(Slider);
  const {
    unit,
    ...other
  } = props;

  const markLabel =<i className='marker'></i>
  const marks = setMarks(props);

  return (
    <div>
      <SliderTooltip
        marks={marks}
        tipFormatter={value => `${value}${unit}`}
        {...props}
    />
    </div>
  );
};

SliderComp.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  markerDistance: PropTypes.number,
  unit: PropTypes.string,
}

SliderComp.defaultProps = {
  min: 0,
  max: 100,
  markerDistance: 0,
  unit: '',
}

export default SliderComp;
