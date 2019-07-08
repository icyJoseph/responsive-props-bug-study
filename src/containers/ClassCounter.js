import React from "react";
import withResponsiveProps from "responsive-props";

import ActionableCounter from "../components/ActionableCounter";
import { background } from "../components/styled";
import { inc, dec } from "../helpers";

export class ClassCounter extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("Class Counter Mounts");
  }

  componentWillUnmount() {
    console.log("Class Counter Unmounts");
  }

  setCount = fn => {
    return this.setState(prev => ({ count: fn(prev.count) }));
  };

  render() {
    const { count } = this.state;
    const { label, responsiveProps } = this.props;
    const actions = [
      { id: "inc", callback: () => this.setCount(inc) },
      { id: "dec", callback: () => this.setCount(dec) }
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
}

// Still loses state (gets unmounted!)
export const ClassCounterWithResponsiveProps = withResponsiveProps(
  ClassCounter,
  { background }
);

export default ClassCounter;
