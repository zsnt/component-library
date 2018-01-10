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

for using a theme you have to wrap the components in the themeprovider component and set the name of the theme.

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

The demo will reload if you make edits.
You will see the build errors and lint warnings in the console

### create new component
Create a new folder in /lib/components/MyComponent and a MyComponent.js and MyComponent.scss file

There you write your react component and the styling.

### write css for the component

these components are themeable with scss. In the file `/lib/styles/themes.scss` you can enter the variables for a new theme or see the variables of the other themes.

When writing scss for your component you should use these variables so the component is themeable.

### publish new version

run `npm run prepublish`

update the version number in `/package.json` inside your working branch.

create a pull request, get a review and merge your changes to master.

check out the updated master version.
create release on github and explain what is content of the new release.
run `npm run publish` to push the latest version to npm package server.
