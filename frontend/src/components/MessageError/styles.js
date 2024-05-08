import styled from "styled-components";

export const MessageStyles = styled.div`
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral50};
  font-size: ${({ theme }) => theme.fontSize.md};
  background-color: ${({ theme }) => theme.colors.red};
  font-weight: 300;
  padding: 0.5rem;
  text-align: center;
`;
