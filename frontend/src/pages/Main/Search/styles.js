import styled from "styled-components";

export const SectionStyles = styled.section`
  padding: 2rem 0rem;

  > .btn-createTask {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  > .no-tasks {
    background-color: ${({ theme }) => theme.colors.neutral300};
    padding: 1rem;
    border-radius: 0.5rem;

    > p {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }
  }
`;
