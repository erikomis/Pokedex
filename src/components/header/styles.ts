import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #f7c545;
  height: 80px;
  width: 100%;
  margin-bottom: 8px;
  div {
    height: 40%;
    display: flex;

    align-items: center;
    justify-content: center;
    padding: 6px;
    > img {
      height: 100%;
    }
    .theme {
      justify-items: flex-end;
    }
  }

  div {
    height: 35px;
    > input {
      width: 400px;
      height: 100%;
      margin-top: 6px;
      border-radius: 8px;
    }
  }

  .select-types {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
