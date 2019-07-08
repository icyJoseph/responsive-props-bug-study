import React from "react";
import { withTheme } from "styled-components";
import { ResponsiveProps } from "responsive-props";

import { Counter } from "./Counter";
import { background } from "../components/styled";

const ThemedResponsiveProps = withTheme(ResponsiveProps);
const withResponsiveProps = (WrappedComponent, mixins = {}) => {
  return React.forwardRef((props, ref) => (
    <ThemedResponsiveProps
      forwardRef={ref}
      wrappedComponent={WrappedComponent}
      mixins={mixins}
      {...props}
    />
  ));
};
// This is good enough, but the solution above looks cleaner!
// notice ThemedResponsiveProps is used here
// const withResponsiveProps = (WrappedComponent, mixins = {}) => {
//   return React.forwardRef((props, ref) =>
//     React.createElement(ThemedResponsiveProps, {
//       forwardRef: ref,
//       wrappedComponent: WrappedComponent,
//       mixins,
//       ...props
//     })
//   );
// };

export default withResponsiveProps(Counter, { background });
