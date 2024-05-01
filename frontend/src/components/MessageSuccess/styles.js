import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;

  > h2 {
    padding-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.neutral50};
    font-weight: 500;
  }

  > .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      color: ${({ theme }) => theme.colors.neutral950};
    }
  }
`;
