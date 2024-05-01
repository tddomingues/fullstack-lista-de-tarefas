import styled from "styled-components";

export const TaskStyles = styled.section`
  padding: 1rem 0rem;
  border-radius: 0.5rem;

  > .creation-form {
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
      gap: 0.5rem;

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > label:nth-child(1) {
          flex: 1;

          > input {
            width: 90%;
          }
        }
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
