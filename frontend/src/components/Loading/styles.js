import styled from "styled-components";

export const LoadingStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  > svg {
    animation: loading 1s linear infinite;
    color: ${({ theme }) => theme.colors.neutral950};
    font-size: 4rem;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
