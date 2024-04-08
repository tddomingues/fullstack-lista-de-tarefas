import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    if (props.$dark800) {
      return props.theme.colors.neutral800;
    }
    return props.theme.colors.primary;
  }};
  color: ${(props) => props.theme.colors.neutral50};
  font-size: ${(props) => props.theme.fontSize.base};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => {
      if (props.$dark800) {
        return props.theme.colors.neutral900;
      }
      return props.theme.colors.primary_hover;
    }};
  }
`;
