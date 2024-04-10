import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 8rem;

  > .nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;

    > div {
      padding: 0.5rem 1rem;

      > a {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize["3xl"]};
      }
    }

    > nav {
      width: 100%;

      > ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        > li {
          width: 100%;
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.md};
          transition: 0.5s ease;
          padding: 0.5rem 1rem;
          cursor: pointer;

          > a {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0.75rem;

            > span {
              font-size: ${({ theme }) => theme.fontSize.xl};
            }
          }

          &:hover {
            background-color: ${({ theme }) => theme.colors.neutral800};
          }
        }
      }
    }
  }

  .btn-logout {
    padding: 0.5rem;

    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
