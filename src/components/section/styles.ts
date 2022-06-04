import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: auto;
`;

export const Header = styled.div`
  padding: 8px;
`;

export const Title = styled.span<{ color: string }>`
  font-size: 20px;
  margin: 0px;
  padding: 4px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;

export const Body = styled.div``;
