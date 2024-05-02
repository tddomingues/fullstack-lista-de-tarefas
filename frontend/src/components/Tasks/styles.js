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
        }
      }
    }
  }
`;
