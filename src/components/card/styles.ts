import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  background: #312e38;
  padding: 40px;
  display: flex;
  margin-top: 40px;
  width: 600px;
  box-shadow: 1px 1px 5px #999591;
  transition: box-shadow 0.5s;

  :hover {
    box-shadow: 4px 4px 15px #06d6a0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 20px;
    color: #06d6a0;
  }

  div:nth-last-child(-n + 3) {
    margin-top: 20px;
    color: #f4ede8;
    font-size: 18px;
  }

  div > span:nth-last-child(-n + 1) {
    span {
      margin-left: 10px;
      color: #999591;
      font-size: 16px;
    }
  }
`;
