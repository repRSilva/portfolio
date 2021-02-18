import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #28262e;
`;

export const Content = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > span {
    font-size: 36px;
    color: #06d6a0;
  }
`;

export const ContainerFluid = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;

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
