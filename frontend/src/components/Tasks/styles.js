import styled from "styled-components";

export const PriorityStyles = styled.td`
  > span {
    background-color: ${(props) =>
      props.priority === "baixa"
        ? props.theme.colors.blue
        : props.priority === "média"
          ? props.theme.colors.yellow
          : props.theme.colors.red};
    padding: 0.25rem;
    text-align: center;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.neutral50};
  }
`;

export const TasksStyles = styled.div`
  > table {
    width: 100%;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;

    > caption {
      text-align: start;
      padding-bottom: 0.125rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }

    > thead {
      > tr {
        > th {
          padding: 0.5rem;
          text-align: start;
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.base};
          border: none;
        }
      }
    }

    > tbody {
      background-color: ${({ theme }) => theme.colors.neutral200};

      > tr {
        border-top: 1px solid ${({ theme }) => theme.colors.neutral300};
        > td {
          padding: 0.5rem;
          text-align: start;
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.md};

          > svg {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
        }

        > .buttons {
          display: flex;
          width: 100%;
          justify-content: end;
          gap: 1rem;

          > button {
            > svg {
              margin-top: 0;
            }
          }
        }
      }
    }
  }

  > .confirm-deletion {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1111;
    background-color: ${({ theme }) => theme.colors.neutral950_transparent};
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    > div {
      width: 300px;

      > .title {
        background: ${({ theme }) => theme.colors.neutral50};
        border-bottom: 1px solid ${({ theme }) => theme.colors.neutral400};
        padding: 1rem;
        border-radius: 0.5rem 0.5rem 0 0;
        > h3 {
          text-align: center;
          font-size: ${({ theme }) => theme.fontSize.lg};
          font-weight: 500;
        }
      }

      > .description {
        background: ${({ theme }) => theme.colors.neutral200};
        border-bottom: 1px solid ${({ theme }) => theme.colors.neutral400};

        padding: 0.5rem;

        > p {
          line-height: 1.4;
          text-align: center;
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.md};
          color: ${({ theme }) => theme.colors.neutral800};
        }
      }

      > .buttons {
        background: ${({ theme }) => theme.colors.neutral200};
        border-radius: 0 0 0.5rem 0.5rem;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: end;
      }
    }
  }
`;
