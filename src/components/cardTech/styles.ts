import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;

  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  svg {
    width: 100px;
    height: 100px;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 10px;
  }

  span {
    font-size: 20px;
    color: #999591;
  }
`;
