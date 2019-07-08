import styled, { css } from "styled-components";

export const background = bg => css`
  background: ${bg};
`;

export const Wrapper = styled.div`
  background: #282c34;
  ${({ responsiveProps }) => responsiveProps}
`;
