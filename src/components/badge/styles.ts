import styled from 'styled-components';

const Container = styled.div`
  background: #06d6a0;
  padding: 10px;
  border-radius: 5px;

  span {
    color: #28262e;
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 840px) {
      font-size: 14px;
    }
  }
`;

export default Container;
