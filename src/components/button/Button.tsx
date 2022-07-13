import {ButtonStyles} from './styles'
import { IButtonProps } from "../../interfaces/button";

export function Button({ children, current,...props }: IButtonProps) {
  return <ButtonStyles  current={current} {...props}>{children}</ButtonStyles>;
}
