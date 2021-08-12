import React from "react";
import Ripples from "react-ripples";
import { Wrapper, Element } from "./index.style";

export type ButtonProps = {
  onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: JSX.Element[] | JSX.Element | string;
  disable?: boolean;
  type?: string;
};

export const Button: React.FunctionComponent<ButtonProps> = ({ onClick, disable, children, type }) => {
  if (disable) {
    return (
      <Wrapper disable={disable}>
        <Element disable={disable}>{children}</Element>
      </Wrapper>
    );
  }

  return (
    <Wrapper disable={disable}>
      <Ripples onClick={disable ? undefined : onClick}>
        <Element disable={disable} type={type}>{children}</Element>
      </Ripples>
    </Wrapper>
  );
};

export default Button;
