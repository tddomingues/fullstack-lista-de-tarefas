import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.colors.neutral50};
  background-color: ${(props) => props.theme.colors[props.type]};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin-top: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
