import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.colors.neutral50};
  background-color: ${(props) => props.theme.colors[props.type]};
  font-size: ${(props) => props.theme.fontSize.base};
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;
