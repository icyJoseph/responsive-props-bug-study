import React from "react";
import View from "./View";
import Controls from "./Controls";
import { Wrapper } from "./styled";

export function ActionableCounter({ label, count, actions, responsiveProps }) {
  return (
    <Wrapper responsiveProps={responsiveProps}>
      <p>{label}</p>
      <View data={count} />
      <Controls actions={actions} />
    </Wrapper>
  );
}

export default ActionableCounter;
