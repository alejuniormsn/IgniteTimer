import { ButtonContainer, ButtonVariants } from './Button.styles'

interface ButtonProps {
  variant: ButtonVariants
}

export function Button(props: ButtonProps) {
  return <ButtonContainer variant={props.variant}>Enviar</ButtonContainer>
}
