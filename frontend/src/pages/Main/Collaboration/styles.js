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

export const PriorityStyles = styled.td`
  > span {
    background-color: ${(props) =>
      props.priority === "baixa"
        ? props.theme.colors.blue
        : props.priority === "media"
          ? props.theme.colors.yellow
          : props.theme.colors.red};
    padding: 0.25rem;
    text-align: center;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.neutral50};
  }
`;
