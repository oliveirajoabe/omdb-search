import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const WrapperNotFound = styled.div`
  width: 57rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    transform: translateY(0px);
    animation: float 5s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-30px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
