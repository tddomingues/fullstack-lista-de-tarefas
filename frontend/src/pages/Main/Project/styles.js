import styled from "styled-components";

export const ProfileStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

  > .data {
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

      > .collaborators,
      > .creator {
        > .listOfCollaborators,
        > .creator-data {
          background-color: ${({ theme }) => theme.colors.neutral100};
          border-radius: 0.5rem;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
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
              object-fit: cover;
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

        > ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
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
      margin-top: 2rem;

      > button {
        color: ${({ theme }) => theme.colors.neutral950};
      }

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

  @media screen and (max-width: 767px) {
    .priority-and-date {
      flex-wrap: wrap;
    }
  }
`;
