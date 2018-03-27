import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { SliderComp } from '../lib';

storiesOf('Organisms/Slider', module)
  .add(
    'this shows the slider',
    withInfo(`
      Slider from https://github.com/react-component/slider

      ~~~js
      <SliderComp />
      ~~~

    `)(() => (
      <SliderComp
        min={0}
        max={50}
        markerDistance={5}
        unit="kWh"
        onBeforeChange={action('onBeforeChange')}
        onAfterChange={action('onAfterChange')}
        onChange={action('onChange')}
      />
    )),
  );
