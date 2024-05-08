import styled from "styled-components";

export const StyleFooter = styled.footer`
  padding: 1rem 4rem;
  background-color: ${({ theme }) => theme.colors.neutral300};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      color: ${({ theme }) => theme.colors.neutral600};
      font-size: ${({ theme }) => theme.fontSize.md};
      font-weight: 300;
    }

    > span {
      cursor: pointer;
      > svg {
        color: ${({ theme }) => theme.colors.neutral950};
      }
    }
  }

  @media screen and (max-width: 1199px) {
    padding: 1rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;

    > div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
