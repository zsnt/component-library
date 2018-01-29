import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { ThemeProvider, SliderComp } from '../build';

storiesOf('Verbund/Slider', module)
  .add(
    'this shows the slider',
    withInfo(`
      Slider from https://github.com/react-component/slider

      ~~~js
      <SliderComp />
      ~~~

    `)(() => (
      <ThemeProvider className="theme-light">
        <SliderComp
          min={0}
          max={50}
          markerDistance={5}
          unit="kWh"
        />
      </ThemeProvider>
    )),
  );
