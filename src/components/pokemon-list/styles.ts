import styled from "styled-components";

export const Containar = styled.div`
height: 50vh;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 10px;
    padding-inline-start: 0;
    margin: 5px;
  }
  .not {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
