import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  align-items: center;
  height: calc(100vh - 120px);
`;

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    margin-top: 30px;
    font-weight: 500;
    color: #f4ede8;
    line-height: 1.5;
  }

  h4 {
    margin-top: 40px;
    color: #999591;
    line-height: 2;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 800px;
    height: 500px;
    margin-top: --50px;
  }
`;
