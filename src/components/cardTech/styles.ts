import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
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

  span {
    font-size: 20px;
    color: #999591;
  }
`;
