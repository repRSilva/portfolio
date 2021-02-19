import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 100px 300px;
  display: flex;
  align-items: center;
  height: calc(100vh - 160px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    margin-top: 30px;
    font-weight: 500;
    color: #f4ede8;
    line-height: 1.5;
  }

  h4 {
    margin-top: 40px;
    color: #999591;
    line-height: 2;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 800px;
    height: 500px;
  }
`;

const pulse = keyframes`

	0% {
		transform: scale(0.95);
    box-shadow: 0 0 0 0 #06d6a0;
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
`;

export const ContainerViewDown = styled.div`
  margin-top: -20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    svg {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      color: #06d6a0;
      animation: ${pulse} 2s infinite;
      :hover {
        color: ${shade(0.2, '#06d6a0')};
      }
    }
  }
`;
