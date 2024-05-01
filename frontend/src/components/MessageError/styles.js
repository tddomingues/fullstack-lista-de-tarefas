import styled from "styled-components";

export const MessageStyles = styled.div`
  &.error-message {
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.neutral50};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
    padding: 0.5rem;
    text-align: center;
  }

  &.error-message {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
