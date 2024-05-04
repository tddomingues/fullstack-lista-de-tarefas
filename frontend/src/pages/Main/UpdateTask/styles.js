import styled from "styled-components";

export const UpdateStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

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
        flex-direction: column;
        gap: 1rem;

        > div {
          display: flex;
          align-items: end;
          gap: 0.25rem;

          svg {
            margin-top: 0;
          }
        }

        .collaborators {
          background-color: ${({ theme }) => theme.colors.neutral100};
          border-radius: 0.5rem;
          padding: 0.5rem;
          > div {
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
            gap: 0.5rem;
            background-color: ${({ theme }) => theme.colors.neutral200};
            padding: 0.5rem;
            border-radius: 0.5rem;
            color: ${({ theme }) => theme.colors.neutral950};
            > img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            > span {
              font-size: ${({ theme }) => theme.fontSize.md};
              > h4 {
                font-weight: 400;
              }
              > p {
                color: ${({ theme }) => theme.colors.neutral950};
                font-weight: 300;
              }
            }

            > svg {
              cursor: pointer;
              color: ${({ theme }) => theme.colors.red};
              font-size: ${({ theme }) => theme.fontSize.xl};
            }
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
