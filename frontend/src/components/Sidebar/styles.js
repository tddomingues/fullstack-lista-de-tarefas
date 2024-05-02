import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 0.5rem;
  padding: 0.5rem;

  > .nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    > div {
      a {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 600;
      }
    }

    > nav {
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
      }
    }
  }
`;
