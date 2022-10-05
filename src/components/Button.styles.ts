import styled, { css } from 'styled-components'

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  danger: 'red',
  warning: 'yellow',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  margin: 0 10px;
  border: none;
  color: ${(props) => props.theme.white};

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }};
`
