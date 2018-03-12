import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { ThemeProvider, SliderComp } from '../lib';

storiesOf('Verbund/Slider', module)
  .add(
    'this shows the slider',
    withInfo(`
      Slider from https://github.com/react-component/slider

      ~~~js
      <SliderComp />
      ~~~

    `)(() => (
      <ThemeProvider>
        <SliderComp
          min={0}
          max={50}
          markerDistance={5}
          unit="kWh"
          onBeforeChange={action('onBeforeChange')}
          onAfterChange={action('onAfterChange')}
          onChange={action('onChange')}
        />
      </ThemeProvider>
    )),
  );
