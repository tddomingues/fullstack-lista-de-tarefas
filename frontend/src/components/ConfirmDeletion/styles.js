import styled from "styled-components";

export const ConfirmDeletionStyles = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1111;
  background-color: ${({ theme }) => theme.colors.neutral950_transparent};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 300px;

    > .title {
      background: ${({ theme }) => theme.colors.neutral50};
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral400};
      padding: 1rem;
      border-radius: 0.5rem 0.5rem 0 0;
      > h3 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: 500;
      }
    }

    > .description {
      background: ${({ theme }) => theme.colors.neutral200};
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral400};

      padding: 0.5rem;

      > p {
        line-height: 1.4;
        text-align: center;
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.colors.neutral800};
      }
    }

    > .buttons {
      background: ${({ theme }) => theme.colors.neutral200};
      border-radius: 0 0 0.5rem 0.5rem;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: end;
    }
  }

  @media screen and (max-width: 767px) {
    > table {
      th:nth-child(2),
      th:nth-child(3),
      th:nth-child(4),
      th:nth-child(5),
      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4),
      td:nth-child(5) {
        display: none;
      }
    }
  }
`;
