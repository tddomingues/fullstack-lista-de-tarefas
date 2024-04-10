import styled from "styled-components";

export const Section = styled.section`
  margin: 1rem;
  padding: 1rem 1rem 0.5rem 1rem;

  > .create-and-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 2rem;

    > div {
      position: relative;
      width: 90%;
      > svg {
        position: absolute;
        top: 7px;
        left: 10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
      }

      > input {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.neutral800};
        padding: 0.5rem 2.5rem;
        border: none;
        border-radius: 1rem;
        color: ${({ theme }) => theme.colors.neutral100};
        font-weight: 300;
      }
    }
  }

  > .tasks {
    > table {
      width: 100%;
      border-collapse: collapse;
      > caption {
        text-align: start;
        padding-bottom: 0.5rem;
        font-size: ${({ theme }) => theme.fontSize.lg};
      }

      > thead {
        > tr {
          background-color: ${({ theme }) => theme.colors.neutral900};

          > th {
            padding: 0.5rem;
            text-align: start;
            font-weight: 400;
            border: none;
          }
        }
      }

      > tbody {
        > tr {
          background-color: ${({ theme }) => theme.colors.neutral800};

          > td {
            padding: 0.5rem;
            text-align: start;
            font-weight: 300;
            font-size: ${({ theme }) => theme.fontSize.md};
          }
        }
      }
    }
  }
`;
