import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral950};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    font-size: ${({ theme }) => theme.fontSize.xl};

    .logo {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }

    > nav {
      > .navbar-login {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-weight: 300;

        > li {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          > span {
            font-size: ${({ theme }) => theme.fontSize.base};
            font-weight: 400;
          }
          > svg {
            font-size: ${(props) => props.theme.fontSize.xl};
          }
        }

        > .btn-logout {
          background-color: ${({ theme }) => theme.colors.neutral800};
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
      }

      > .navbar-logout {
        display: flex;
        gap: 1rem;
        font-weight: 300;
        > div {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
      }
    }
  }
`;
