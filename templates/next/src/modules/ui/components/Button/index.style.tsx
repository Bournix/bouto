import styled from "styled-components";


export type ButtonProps = {
  disable?: boolean;
  type?: any;
};

export const Wrapper = styled.div<ButtonProps>`
  background: ${props => props.theme.colors.buttonBackground};
  border-radius: ${props => props.theme.borderRadius.button};
  width: 100%;

  .react-ripples {
    border-radius: ${props => props.theme.borderRadius.button};
    width: 100%;
  }
`;

export const Element = styled.button<ButtonProps>`
  background: ${props => props.disable ? "#B4B3B3" : props.theme.colors.buttonBackground};
  border-radius: ${props => props.theme.borderRadius.button};
  padding: ${props => props.theme.padding.button};
  width: 100%;
  outline: none;
  border: none;
  cursor: ${props => props.disable ? "not-allowed" : "pointer"};
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.disable ? "#828282" : props.theme.colors.buttonText};
`;
