import styled from "styled-components";

export const TasksStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral100};
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  overflow: overlay;

  > table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 1rem;
      text-align: left;
    }
    > caption {
      text-align: start;
      padding-bottom: 0.125rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }

    > thead {
      background-color: ${({ theme }) => theme.colors.neutral300};
      > tr {
        > th {
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.base};
        }
      }
    }

    > tbody {
      > tr {
        > td {
          font-weight: 400;
          border-bottom: 1px solid ${({ theme }) => theme.colors.neutral300};

          font-size: ${({ theme }) => theme.fontSize.md};
          min-width: 150px;
          > svg {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
        }

        > .deadline {
          min-width: 80px;
        }

        > .priority {
          min-width: 20px;
        }

        > .status {
          min-width: 120px;
        }

        > .buttons {
          min-width: 160px;
          > button {
            float: right;
            margin-right: 0.5rem;
            > svg {
              margin-top: 0;
            }
          }

          > button:nth-child(1) {
            margin-right: 0rem;
          }
        }

        > .creator {
          min-width: 90px;
          > img {
            vertical-align: middle;
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 50%;
          }

          > span {
            margin-left: 0.25rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    > table {
      th:nth-child(2),
      th:nth-child(3),
      th:nth-child(4),
      th:nth-child(5),
      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4),
      td:nth-child(5) {
        display: none;
      }
    }
  }
`;
