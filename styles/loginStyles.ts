import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  height: 30px;
  width: 300px;
  background-color: #1555d1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0d3b9a;
    transition: 0.1s;
    transform: scaleY(1.1);
  }
  font-weight: bold;
`;
