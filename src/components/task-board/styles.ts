import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(233 233 231) 0px -1px 0px inset;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const Body = styled.div`
  padding: 16px;
`;

export const SectionList = styled.div`
  display: flex;
  gap: 16px;
`;

export const NoContentMessage = styled.div`
  text-align: center;
  margin-top: 48px;
  font-size: 24px;
`;
