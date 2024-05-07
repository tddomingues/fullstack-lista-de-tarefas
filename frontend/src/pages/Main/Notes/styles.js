import styled from "styled-components";

export const SectionStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

  h2 {
    padding-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
  }

  > .info {
    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;
    padding: 1rem;
    align-self: start;
    width: 100%;

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

      input[type="submit"] {
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

    .buttons {
      display: flex;
      align-items: end;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: end;
        gap: 1rem;
      }
      button {
        margin-top: 1rem;
      }
    }
  }

  > .notes {
    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    > h2 {
      padding-bottom: 1rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }

    background-color: ${({ theme }) => theme.colors.neutral300};
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: ${({ theme }) => theme.colors.neutral100};
      border-radius: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 2rem;
      position: relative;

      > .date {
        position: absolute;
        top: -1rem;
        right: 0;
        color: ${({ theme }) => theme.colors.neutral950};
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: 300;
      }

      > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      > .name-comment {
        word-break: break-all;
        width: 100%;

        > h4 {
          padding-bottom: 0.125rem;
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 500;
        }

        > p {
          color: ${({ theme }) => theme.colors.neutral950};
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 300;
        }
      }

      > .date-delete {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 0rem;

        p {
          color: ${({ theme }) => theme.colors.neutral950};
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: 300;
        }
      }
    }
  }
`;
