import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    if (props.$dark700) {
      return props.theme.colors.neutral700;
    }

    return props.theme.colors.primary;
  }};
  color: ${(props) => props.theme.colors.neutral50};
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;
