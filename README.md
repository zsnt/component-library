# component-library
[![Build Status](https://travis-ci.org/gridsingularity/component-library.svg?branch=master)](https://travis-ci.org/gridsingularity/component-library) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Living Styleguide by Grid Singularity

Licensed under [GNU LESSER GENERAL PUBLIC LICENSE](https://www.gnu.org/licenses/lgpl-3.0.de.html)

## Usage
### For react based applications

Install the gsy component library package from npm

`npm install -s gsy-component-library`

Now you should have in your node modules a folder from gsy-component-library which contains a build folder. In this build folder are all ready to use pre-compiled components.
If you want to use one of them in a react render function just import the component you want to use:

`import Button from 'gsy-component-library/build/'`

Every component comes with its own, already included, css. Check out the storybook demo of the component to see prop and theming options and how to set them.

For using a theme you have to wrap the components in the themeprovider component and set the name of the theme.

## Contribute

This repository is published under GLGPL-3.0, you can fork it and create Pull Requests to participate in the development of this library. Feel free to check out existing issues or create new issues if you discover a bug or miss some functionality.


Use [angular commit message format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) to commit. This allows the automatic versioning to pick the right versionnumber.

### How to develop for this repository

#### Clone repository & install dependencies

```bash
git clone https://github.com/gridsingularity/component-library.git
cd component-library
npm install
```

#### Start the storybook demo

`npm run storybook`

The demo will reload if you make edits.
You will see the build errors and lint warnings in the console

### Create new component

Create a new folder in /lib/components/MyComponent and a MyComponent.js and MyComponent.scss file

There you write your react component and the styling.

### Write CSS for the component

These components are themeable with scss. In the file `/lib/styles/themes.scss` you can enter the variables for a new theme or see the variables of the other themes.

When writing scss for your component you should use these variables so the component is themeable.

### Publish new version

Versioning is handled via the package [semantic-release]( https://www.npmjs.com/package/semantic-release)

A new version gets published after successfully merging a pull request to master. It s important to use correct [commit-message syntax](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

### Deploy to heroku

on your working branch run
`npm run build-storybook`
this will create the static files inside .out folder. **Commit and push** your changes to your branch. Otherwise git will respond with 'No new revisions were found'.

For the deployment to heroku it needs to be merged into the deploy branch. This branch is a subtree of the master branch. Therefore you have to subtree split the .out folder into a new branch with the updated version name.
`git subtree split --prefix=.out -b version-123`

You now should have a new branch which contains the contents of .out inside its main folder.

Then switch to deploy branch. The deploy branch contains the files of the .out folder plus a gitignore file and a different package.json to run it as a static-page.
Now all you have to do is merge your newly created version branch.
`git merge version-123 --allow-unrelated-histories`

you can check if your changes applied when running
`npm install`
`npm run start`


When you pushed the deploy branch the heroku deploy pipeline will automatically deploy this version.


### External Libraries and packages
The used Icons are from [material.io](https://material.io/tools/icons/)

### Testing automatic publishing w/ newly connected GitHub and NPM user gsydev
