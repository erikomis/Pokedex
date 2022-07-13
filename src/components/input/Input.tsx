import { IInputProps } from "../../interfaces/input";
import { InputStyle } from "./styles";

export function Input({ onChange, type,placeholder }: IInputProps) {
  return (
    <>
      <InputStyle placeholder={placeholder} type={type} onChange={onChange} />
    </>
  );
}
