# REACT-CLASSIFIACTION-BANNER

Basic Component for rendering a classification banner in react as a header and a footer that floats over everything.

# Basic Use

Use like a normal React Component with the only specifier needed being the classifiaction variable set to the text values of "unclassified", "confidential", "cui", "secret", "topsecret", or "topsecret_sci".

# Ongoing Bug

I am currently trying to fix a bug where once imported the unit testing through jest will flag this module as not a module. Any help solving this issue would be appreciated. https://github.com/OOCAZ/react-classification-banner/issues/1

## Install

```bash
npm install --save 'react-classification-banner'
```

## Basic Usage (usually in your index.js, then it renders over everything)

```js
import React from "react";
import ClassificationBanner from "react-classification-banner";

function myCoolExample() {
  return <ClassificationBanner classification="unclassified" />;
}

export default myCoolExample;
```

The colors are automatic and if you enter an invalid value the banner will be black with red text

## ! Please note ! The Banner will float over your other content and you will need to add a spacer of 25 pixels if you want all of your content to be seen!

Please feel free to comment of go to the Github Repo and submit an issue if you have a question or would like to see additional functionality.

## Additional info, the build will only work on windows rn, working on fix

### Github Link:

(https://github.com/OOCAZ/react-classification-banner)

### I Take big inspiration from @mobdata

Go check out their stuff: https://github.com/mobdata# classification-banner

## License

`react-classification-banner` is released under the MIT license.
