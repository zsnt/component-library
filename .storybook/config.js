import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
require('./style.css');
import '@storybook/addon-viewport/register'
import '@storybook/addon-actions/register';

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div className="demoWrapper">
    {story()}
  </div>
));

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
});


configure(loadStories, module);
