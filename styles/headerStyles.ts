import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`;

export const Image = styled.img`
  height: 35px;
  padding: 0 40px;
`;

export const optionTheme = {
  dark: {
    transform: "rotate(180deg)",
    width: "50px",
    fontSize: "40px",
    color: "white",
  },
};
