import styled from "styled-components";

export const ProfileStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

  form {
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

  input[type="submit"] {
    border: none;
    color: ${(props) => props.theme.colors.neutral50};
    background-color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.md};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    align-self: start;

    cursor: pointer;
  }

  > .profile {
    position: relative;
    height: 320px;
    background-color: bisque;

    > .data {
      position: absolute;
      width: 80%;
      background-color: ${({ theme }) => theme.colors.neutral200};
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2rem;
      border-radius: 0.5rem;

      .profilePicture {
        margin-bottom: 1rem;
        > img {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      > button {
        position: absolute;
        top: 1rem;
        right: 1rem;

        > svg {
          margin: 0 0 0 4px;
          font-size: ${({ theme }) => theme.fontSize.xl};
        }
      }
    }
  }

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
      .picture {
        position: relative;
        width: 200px;
        height: 200px;
        border: 2px dashed ${({ theme }) => theme.colors.neutral400};
        cursor: pointer;
        outline: none;
        overflow: hidden;

        > input {
          background-color: ${({ theme }) => theme.colors.neutral200};
          display: none;
        }

        > .currentImage {
          height: 100%;
          width: 100%;
          opacity: 0.5;

          > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 0;
          }
        }

        > .iconInsertPhoto {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          > svg {
            font-size: ${({ theme }) => theme.fontSize["3xl"]};
            color: ${({ theme }) => theme.colors.neutral500};
          }
        }
      }

      > .buttons {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        > button {
          color: ${({ theme }) => theme.colors.neutral950};
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    > .profile {
      > .data {
        padding: 1rem;
        width: 90%;

        .profilePicture {
          > img {
            height: 100px;
            width: 100px;
          }
        }
      }
    }

    > .update {
      > form {
        > .picture {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`;
