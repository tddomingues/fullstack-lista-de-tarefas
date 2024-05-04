import styled from "styled-components";

export const SectionStyles = styled.section`
  padding: 2rem 0rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;

    > button {
      > svg {
        margin-top: 0px;
        color: ${({ theme }) => theme.colors.neutral50};
      }
    }

    > form {
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
    }
  }

  > .no-tasks {
    background-color: ${({ theme }) => theme.colors.neutral300};
    padding: 1rem;
    border-radius: 0.5rem;

    > p {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }
  }
`;

export const PriorityStyles = styled.td`
  > span {
    background-color: ${(props) =>
      props.priority === "baixa"
        ? props.theme.colors.blue
        : props.priority === "media"
          ? props.theme.colors.yellow
          : props.theme.colors.red};
    padding: 0.25rem;
    text-align: center;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.neutral50};
  }
`;
