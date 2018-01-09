# component-library
living styleguide

## Usage
### For react based applications
Install the gsy component library package from npm
`npm install -s gsy-component-library`

Now you should have in your node modules a folder from gsy-component-library which contains a build folder. In this build folder are all ready to use pre-compiled components.
If you want to use one of them in a react render function just import the component you want to use:

`import Button from 'gsy-component-library/build/components/Button/Button'`

Every component comes with its own, already included, css. Check out the storybook demo of the component to see prop and theming options and how to set them.

## Contribute
This repository is published under GLGPL-3.0, you can fork it and create Pull Requests to participate in the development of this library. Feel free to check out existing issues or create new issues if you discover a bug or miss some functionality.


### how to develop for this repository
clone repository

`git clone https://github.com/gridsingularity/component-library.git`
`cd component-library`

start the storybook demo
`npm run storybook`

start watcher for developing components
`npm run start-watch`
