import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  background: #28262e;
`;

export const Content = styled.div`
  padding: 0 200px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-top: 30px;
    display: flex;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      margin-left: 4px;
      color: #06d6a0;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }

  > span {
    font-size: 20px;
    color: #06d6a0;
    font-weight: 500;

    @media (max-width: 800px) {
      margin-top: 40px;
    }
  }

  a {
    color: #999591;
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      margin-top: 15px;
    }

    span {
      margin: 0 5px;
    }
    svg {
      color: #06d6a0;
    }

    &:hover {
      color: #06d6a0;
      font-weight: 500;
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 40px;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 20px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #999591;
  }
`;
