import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral900};
  padding: 5rem 0;

  > div {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.neutral800};
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral700};

    > h2 {
      font-weight: 400;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize["3xl"]};
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > .error-message {
        background-color: ${({ theme }) => theme.colors.red};
        font-size: ${({ theme }) => theme.fontSize.md};
        padding: 0.5rem;
        border-radius: 0.5rem;
        text-align: center;
      }

      > label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        //input type text and password
        > input {
          background-color: ${({ theme }) => theme.colors.neutral700};
          color: ${({ theme }) => theme.colors.neutral50};
          border: none;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        > span {
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.md};
        }
      }

      //input de submit
      > input {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.neutral50};
        font-size: ${({ theme }) => theme.fontSize.base};
        border: none;
        border-radius: 1rem;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        margin-top: 2rem;
        transition: all 0.25s ease-out;

        &:hover {
          background-color: ${({ theme }) => theme.colors.primary_hover};
        }
      }
    }

    > .redirect-to-login {
      display: flex;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSize.md};

      > span {
        text-decoration: underline;
      }
    }
  }
`;
