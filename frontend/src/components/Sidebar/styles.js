import styled, { css } from "styled-components";

export const HeaderStyles = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 0.5rem;
  padding: 0.5rem;

  > .nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    > .open {
      > svg {
        margin-top: 0;
        color: ${({ theme }) => theme.colors.neutral950};
      }
    }

    > .logo {
      a {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 800;
      }
    }

    > .menu-desktop {
      > ul {
        display: flex;
        gap: 1rem;

        > li {
          transition: 0.5s all ease;

          border-radius: 0.5rem;
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
          cursor: pointer;

          > a {
            display: flex;
            padding: 0.5rem 1rem;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            svg {
              font-size: ${({ theme }) => theme.fontSize.base};
              margin-top: 2px;
            }
          }

          &:hover {
            background-color: ${({ theme }) => theme.colors.neutral200};
          }
        }

        > .logout {
          align-self: start;
          color: ${({ theme }) => theme.colors.neutral950};
          background-color: ${({ theme }) => theme.colors.neutral200};
        }
      }
    }

    > .menu-mobile {
      display: none;
    }

    .open {
      display: none;
    }

    @media screen and (max-width: 767px) {
      .open {
        display: flex;
      }

      .menu-desktop {
        display: none;
      }

      .menu-mobile {
        position: fixed;
        display: flex;
        width: 260px;
        ${({ menuisclosed }) =>
          menuisclosed === "true"
            ? css`
                right: -260px;
              `
            : css`
                right: 0px;
              `}
        top: 0;
        height: 100vh;
        z-index: 111111;
        background-color: ${({ theme }) => theme.colors.neutral900};
        color: ${({ theme }) => theme.colors.neutral50};
        flex-direction: column;
        padding: 0.5rem;
        transition: 0.25s ease;

        > ul {
          display: flex;
          flex-direction: column;
          align-items: start;
          height: 100%;
          gap: 1rem;

          > li {
            transition: 0.5s all ease;
            border-radius: 0.5rem;
            font-size: ${({ theme }) => theme.fontSize.md};
            font-weight: 500;
            cursor: pointer;

            color: ${({ theme }) => theme.colors.neutral50};
            width: 100%;

            > a {
              display: flex;
              padding: 0.5rem 1rem;
              align-items: center;
              justify-content: start;
              gap: 0.25rem;

              svg {
                font-size: ${({ theme }) => theme.fontSize.base};
                margin-top: 2px;
              }
            }
          }
        }

        .closed {
          align-self: end;
          color: ${({ theme }) => theme.colors.neutral50};
          margin-bottom: 2rem;

          svg {
            margin-top: 0px;
          }
        }

        > .logout {
          align-self: start;
          color: ${({ theme }) => theme.colors.neutral950};
          margin: 0rem 0rem 1rem 1rem;
        }
      }
    }
  }
`;
