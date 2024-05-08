import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral950};
  color: ${({ theme }) => theme.colors.neutral950};
  height: 100%;
  display: grid;
  place-items: center;

  > div {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.neutral100};
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;

    > h2 {
      font-weight: 500;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize["3xl"]};
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > .error-message {
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.neutral50};
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: 300;
        padding: 0.5rem;
        text-align: center;
      }

      > label {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;

        //input type text and password
        > input {
          width: 100%;
          background-color: ${({ theme }) => theme.colors.neutral300};
          padding: 0.5rem;
          border: none;
          border-radius: 0.5rem;
          color: ${({ theme }) => theme.colors.neutral950};
          font-weight: 300;
        }

        > span {
          font-weight: 500;
          font-size: ${({ theme }) => theme.fontSize.md};
        }
      }

      //input de submit
      > input {
        color: ${(props) => props.theme.colors.neutral50};
        background-color: ${(props) => props.theme.colors.purple};
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: 500;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
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
