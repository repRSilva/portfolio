import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #312e38;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    margin-top: 40px;
    font-size: 32px;
    color: #f4ede8;
    line-height: 2;
  }

  p {
    margin-top: 40px;
    font-size: 16px;
    color: #999591;
    line-height: 2;
  }
`;
