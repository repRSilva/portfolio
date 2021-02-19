import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #28262e;

  h1 {
    font-size: 36px;
    color: #06d6a0;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #999591;
  transition: box-shadow 0.5s;

  :hover {
    box-shadow: 4px 4px 15px #06d6a0;
  }
`;
