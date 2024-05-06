import styled from "styled-components";

export const ProfileStyles = styled.section`
  padding: 2rem 0rem;
  border-radius: 0.5rem;

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > .img {
      margin-bottom: 1rem;
    }

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

  > .info {
    position: relative;
    height: 350px;
    background-color: bisque;

    > div {
      position: absolute;
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      background-color: ${({ theme }) => theme.colors.neutral200};
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1rem;
      border-radius: 0.5rem;
    }

    button {
      position: absolute;
      top: 1rem;
      right: 1rem;

      > svg {
        margin-top: 0;
        font-size: ${({ theme }) => theme.fontSize.xl};
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
        background: ${({ theme }) => theme.colors.neutral200};
        display: flex;
        align-items: center;
        justify-content: end;
        color: ${({ theme }) => theme.colors.neutral400};
        border: 2px dashed currentcolor;
        cursor: pointer;
        font-family: sans-serif;

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
            border-radius: 0;
          }
        }

        > .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          > svg {
            font-size: ${({ theme }) => theme.fontSize["3xl"]};
            color: ${({ theme }) => theme.colors.neutral800};
          }
        }
      }

      > div {
        display: flex;
        justify-content: space-between;
      }
    }

    button {
      margin-top: 1rem;
    }
  }
`;
