import styled from "styled-components";

export const ProfileStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

  > .info,
  > .update {
    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;
    padding: 1rem;
    align-self: start;
    width: 100%;

    > h2 {
      padding-bottom: 1rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }
    > form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      label {
        display: flex;
        flex-direction: column;

        > span {
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
        }

        > input,
        textarea {
          margin-top: 0.125rem;
          width: 100%;
          background-color: ${({ theme }) => theme.colors.neutral100};
          padding: 0.5rem;
          border: none;
          border-radius: 0.5rem;
          color: ${({ theme }) => theme.colors.neutral950};
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 300;
        }
      }

      > .collaborators--active {
        > span {
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
        }

        > ul {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-top: 0.125rem;
          width: 100%;
          background-color: ${({ theme }) => theme.colors.neutral100};
          padding: 0.5rem;
          border: none;
          border-radius: 0.5rem;

          > li {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }

            span {
              color: ${({ theme }) => theme.colors.neutral950};
              font-size: ${({ theme }) => theme.fontSize.md};
              font-weight: 300;
            }
          }
        }
      }

      > .priority-and-date {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 1rem;

        > div {
          display: flex;
          align-items: end;
          gap: 1rem;
        }
      }
    }

    .buttons {
      display: flex;
      align-items: end;
      justify-content: space-between;
      > button {
        margin-top: 1rem;
      }
    }
  }

  > .update-form {
    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;

    > h2 {
      padding-bottom: 1rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > div:nth-child(2) {
        display: flex;
        align-items: end;
        gap: 1rem;

        > div {
          display: flex;
          align-items: end;
          gap: 0.25rem;

          svg {
            margin-top: 0;
          }
        }
      }

      > div:nth-child(3) {
        display: flex;
        align-items: end;
        gap: 1rem;
      }

      > .buttons {
        display: flex;
        justify-content: space-between;
      }

      label {
        display: flex;
        flex-direction: column;

        > span {
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
        }

        > input,
        textarea,
        select,
        option {
          margin-top: 0.125rem;
          width: 100%;
          background-color: ${({ theme }) => theme.colors.neutral100};
          padding: 0.5rem;
          border: none;
          border-radius: 0.5rem;
          color: ${({ theme }) => theme.colors.neutral950};
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 300;
        }

        > input[type="date"] {
          width: 10rem;
        }
      }

      input[type="submit"],
      input[type="button"] {
        border: none;
        color: ${(props) => props.theme.colors.neutral50};
        background-color: ${(props) => props.theme.colors.purple};
        font-size: ${(props) => props.theme.fontSize.md};
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 400;
        align-self: start;
        margin-top: 1rem;
        cursor: pointer;
      }
    }
  }
`;
