import { ButtonContainer } from './Button.styles';

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
