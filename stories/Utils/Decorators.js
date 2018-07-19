import React from 'react';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from '../../lib';

export function ThemeDecorator(theme) {
  return story =>
    <ThemeProvider theme={theme}>
      {StoryRouter()(story)}
    </ThemeProvider>
}
