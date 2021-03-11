import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 0%;
  background: #28262e;
`;

export const Content = styled.div`
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 40px;
    flex-direction: column;
    justify-content: center;
  }
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
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;

      @media (max-width: 1024px) {
        display: none;
      }
    }

    strong {
      margin-left: 4px;
      color: #06d6a0;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }

  a {
    color: #999591;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
      margin-left: 0;
    }

    span {
      margin: 0 5px;
    }
    svg {
      color: #06d6a0;
      width: 12px;
      height: 12px;
    }

    &:hover {
      color: #06d6a0;
      font-weight: 500;
    }
  }
`;

export const NavSocial = styled.nav`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    margin-top: 20px;
  }

  a {
    color: #999591;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #06d6a0;
    }
    span {
      margin-left: 10px;
    }

    &:hover {
      color: #06d6a0;
      font-weight: 500;
    }
  }
`;
