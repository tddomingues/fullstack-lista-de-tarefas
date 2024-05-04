import styled from "styled-components";

export const SearchFormStyles = styled.form`
  flex: 1;
  > label {
    > div {
      position: relative;

      > .svg-search,
      > .svg-clear {
        position: absolute;

        font-size: ${({ theme }) => theme.fontSize.base};
      }

      > .svg-search {
        top: 8px;
        left: 8px;
        color: ${({ theme }) => theme.colors.neutral950};
      }

      > .svg-clear {
        top: 8px;
        right: 8px;
        color: ${({ theme }) => theme.colors.red};
      }

      > input {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.neutral300};
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.colors.neutral950};
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: 300;
      }
    }
  }
`;
