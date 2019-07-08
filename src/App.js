import React from "react";

import Counter, { CounterWithResponsiveProps } from "./containers/Counter";
import ClassCounter, {
  ClassCounterWithResponsiveProps
} from "./containers/ClassCounter";
import Fixed from "./containers/Fixed";
import { useForceUpdate } from "./hooks";

const background = { xs: "#282c34", s: "#002635", m: "#013440", l: "#AB1A25" };

export default function App() {
  const forceUpdate = useForceUpdate();

  return (
    <div className="App">
      <h1>Update the counters and then:</h1>
      <button onClick={forceUpdate}>Force Update!</button>
      <div className="examples">
        <div>
          <h4>using Hooks</h4>
        </div>
        <Counter label="Counter" />
        <CounterWithResponsiveProps
          label="using withResponsiveProps"
          background={background}
        />
        <div>
          <h4>using Classes</h4>
        </div>
        <ClassCounter label="Class Counter" />
        <ClassCounterWithResponsiveProps
          label="using withResponsiveProps"
          background={background}
        />
        <div>
          <h4>Solution</h4>
        </div>
        <Fixed label="with Fixed" background={background} />
      </div>
    </div>
  );
}
