import styled from 'styled-components';

export const Container = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  background: #fff;
  border: none;
  border-radius: 4px;
  transition: background 50ms ease-in;

  :hover {
    background: #efefef;
  }
`;
