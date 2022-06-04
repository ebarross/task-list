import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 40px;
  transition: background 20ms ease-in;
  color: rgba(55, 53, 47, 0.5);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
`;
