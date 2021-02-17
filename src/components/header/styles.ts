import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 0%;
  background: #28262e;
`;

export const Content = styled.div`
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-left: 16px;
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

export const Nav = styled.nav`
  padding: 0 10px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;

  a {
    color: #999591;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #06d6a0;
      font-weight: 500;
    }
  }
`;
