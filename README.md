## Getting Started

A React Library for fetching States and districts of India. `npm i state-district-component`.

### With create-react-app

`create-react-app` is a popular CLI tool to getting started with React. If you're new to React or Webpack, you might be starting out here. This section will walk you through configuring `create-react-app` to install and use our components.

If you're using an older version (v1) of `create-react-app`, please refer to our [create-react-app-v1 doc](docs/create-react-app-v1.md).

> Recommended things to know

> 1. node/npm
> 2. JavaScript
> 3. HTML/CSS
> 4. ES6

> _NOTE:_ If you haven't used `create-react-app` before, you may want to read the [Overview Guide](https://github.com/facebook/create-react-app#quick-overview).

#### Step 1: Install Components

Install Component:

```
npm i state-district-component
```

#### Step 2: Use State and District Components

```js
import React, { useState } from "react";
import "./App.css";
import { States, Districts } from "state-district-component";
const App = () => {
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const styles = {
    // pass the styles in the style props of component
    width: "230px",
    outline: "none",
    padding: "10px",
    background: "rgb(227, 226, 226)",
    border: "none",
    borderRadius: "6px",
  };
  const getStateValue = (value) => {
    // for geting  the input value pass the function in oChnage props and you will get value back from component
    setState(value);
  };
  const getDistrictValue = (value) => {
    setDistrict(value);
  };
  return (
    <>
      <States styles={styles} onChange={getStateValue} />
      <Districts state={state} onChange={getDistrictValue} />
      {/*pass the state props to District component the name of state for which you want to get districts */}
    </>
  );
};

export default App;
```

### Components

| Component | Props                           |
| --------- | ------------------------------- |
| States    | className , styles ,onChange    |
| District  | className,style ,onChange,State |

### Porps Usage

| Porp      | Usage                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------- |
| className | pass className prop to give input component a class name and you can style it by targeting class name |
| styles    | you can pass style project to get style to input                                                      |
| state     | pass the state prop only for District component for Indian state which you want to get districts      |
| onChange  | will give back the value of the input                                                                 |

### Other usage

#### Geting arrays of state and districts

```js
import { allStates, allDistricts } from "state-district-component";
```

##### Above imports are array of state and distrct you can use it for your project if you dont want to use States and Districts components ,if you want make custom comoponents
