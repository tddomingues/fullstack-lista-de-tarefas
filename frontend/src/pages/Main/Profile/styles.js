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
      gap: 0.5rem;

      > label {
        display: flex;
        flex-direction: column;

        > span {
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
        }

        > input {
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
    }

    > button {
      margin-top: 1rem;
    }
  }

  > .update {
    > form {
      > div {
        display: flex;
        justify-content: space-between;
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
`;
