import React from 'react';
import PropTypes from 'prop-types';

import { Range, createSliderWithTooltip } from 'rc-slider';

const RangeTooltip = createSliderWithTooltip(Range);

require(`../Slider/Slider.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const setMarks = (props) => {
  const {
    max,
    min,
    markerDistance,
    unit,
  } = props;

  const markLabel = <i className="marker" />;

  const marks = {
    [min]: { label: <i className="marker marker--min">{min}{unit}</i> },
    [max]: { label: <i className="marker marker--max">{max}{unit}</i> },
  };

  if (markerDistance > 0) {
    for (let i = min + markerDistance; i < max; i += markerDistance) {
      marks[i] = { label: markLabel };
    }
  }
  return marks;
};

const RangeComp = (props) => {
  const {
    unit,
    ...other
  } = props;

  const marks = setMarks(props);

  return (
    <div>
      <RangeTooltip
        marks={marks}
        tipFormatter={value => `${value}${unit}`}
        {...other}
      />
    </div>
  );
};

RangeComp.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  /** Will be used to calculate the amount of markers to be set. */
  markerDistance: PropTypes.number,
  /** Unit of the sliders value e.g. percentage kWh etc. */
  unit: PropTypes.string,
  /** onChange will be triggered while the value of Slider changing. */
  onChange: PropTypes.func,
  /** onAfterChange will be triggered when ontouchend or onmouseup is triggered. */
  onAfterChange: PropTypes.func,
  /** onBeforeChange will be triggered when ontouchstart or onmousedown is triggered. */
  onBeforeChange: PropTypes.func,
};

RangeComp.defaultProps = {
  min: 0,
  max: 100,
  markerDistance: 0,
  unit: '',
  onChange: () => {},
  onAfterChange: () => {},
  onBeforeChange: () => {},
};

export default RangeComp;
