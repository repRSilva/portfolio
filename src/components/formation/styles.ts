import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #28262e;

  @media (max-width: 1024px) {
    padding: 40px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
  }

  > span {
    font-size: 36px;
    color: #06d6a0;

    @media (max-width: 1024px) {
      margin-top: 40px;
    }
  }
`;

export const ContainerFluid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media (max-width: 1024px) {
    text-align: center;
  }

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
