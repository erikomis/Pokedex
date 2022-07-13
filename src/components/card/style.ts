import styled from "styled-components";
import { theme } from "../../styles/theme";

interface divProps {
  background: string;
}

export const CardStyle = styled.div<divProps>`
  display: flex;
  flex-direction: column;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 20px;
  background: ${(props)=> props.theme.colors.dark};
  color:${(props)=> props.theme.colors.light};
  text-align: center;
  border-radius: 10px;
  position: relative;
  border: 1px solid;
  margin: 5px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 5px 3px 3px ${(props)=> props.theme.colors.light};
  }
  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: ${(props) => props.background};
  }
  img {
    height: 120px;
    width: 120px;
  }
`;
