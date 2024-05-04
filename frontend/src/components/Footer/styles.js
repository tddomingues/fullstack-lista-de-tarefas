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
`;
