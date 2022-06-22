import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: auto;
  min-height: 500px;
  cursor: pointer;
`;

export const Header = styled.div`
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Actions = styled.div`
  display: none;

  ${Container}:hover & {
    display: block;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
