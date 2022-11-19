# REACT-CLASSIFIACTION_BANNER

Basic Component for rendering a classification banner in react as a header and a footer that floats over everything.

# Basic Use

Use like a normal React Component with the only specifier needed being the classifiaction variable set to the text values of "unclassified", "confidential", "cui", "secret", "topsecret", or "topsecret_sci". 

```
import React from "react";
import ClassificationBanner from "@oocaz/react-classification-banner";

function myCoolExample(){
    return(
        <ClassificationBanner classification="unclassified" />
    )
}

export default myCoolExample;
```

The colors are automatic and if you enter an invalid value the banner will be black with red text

## !Please note! The Banner will float over your other content and you will need to add a spacer of 25 pixels if you want all of your content to be seen!

Please feel free to comment of go to the Github Repo and submit an issue if you have a question or would like to see additional functionality. 

### Github Link: 

(https://github.com/OOCAZ/react-classification-banner)


