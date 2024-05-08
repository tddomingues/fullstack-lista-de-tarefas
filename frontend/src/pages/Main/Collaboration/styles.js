import styled from "styled-components";

export const SectionStyles = styled.section`
  padding: 2rem 0rem;

  > .no-collaboration {
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
