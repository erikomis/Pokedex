import styled from "styled-components";

interface IButtonSylesProps {
  current?: string;
}

export const ButtonStyles = styled.button<IButtonSylesProps>`
  background: ${(props) => (props.current ? props.current : "#f6f7f9")};
  width: 40px;
  height: 40px;
  border: none;
  margin: 1px;
  border-radius: .5rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;
