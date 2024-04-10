import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.neutral950};
`;

export const Container = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: auto 1fr;
`;
