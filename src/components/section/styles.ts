import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: auto;
  min-height: 500px;
  background: #9999992b;
`;

export const Header = styled.div`
  padding: 8px;
  display: flex;
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 0px;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 20ms ease-in;

  :hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;

export const Text = styled.div<{ color: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export const Body = styled.div``;
