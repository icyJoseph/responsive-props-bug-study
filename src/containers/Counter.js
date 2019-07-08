import React from "react";
import withResponsiveProps from "responsive-props";

import ActionableCounter from "../components/ActionableCounter";
import { background } from "../components/styled";
import { inc, dec } from "../helpers";
import { useOneTimeEffect } from "../hooks";

export function Counter({ label, responsiveProps }) {
  const [count, setCount] = React.useState(0);

  useOneTimeEffect();

  const actions = [
    { id: "inc", callback: () => setCount(inc) },
    { id: "dec", callback: () => setCount(dec) }
  ];

  return (
    <ActionableCounter
      label={label}
      count={count}
      actions={actions}
      responsiveProps={responsiveProps}
    />
  );
}

// unfortunately it looses its state (gets cleaned up!)
export const CounterWithResponsiveProps = withResponsiveProps(Counter, {
  background
});

export default Counter;
