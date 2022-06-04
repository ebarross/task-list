import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  border-radius: 3px;
  transition: background 20ms ease-out;
  background: #ffffff;
  cursor: pointer;
  position: relative;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: none;

  ${Container}:hover & {
    display: block;
  }
`;

export const Content = styled.div`
  padding: 16px;
`;
