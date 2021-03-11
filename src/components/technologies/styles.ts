import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #28262e;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  h1 {
    font-size: 36px;
    color: #06d6a0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  width: 100%;
  padding: 50px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #999591;
  transition: box-shadow 0.5s;
  background: #312e38;

  :hover {
    box-shadow: 4px 4px 15px #06d6a0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
