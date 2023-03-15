import styled from "styled-components";
import { BaseTitle } from "../../../../styles/styles";

export const PostCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  padding: 0 5px;
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-span"]};
  }
`;

export const PostCounterTitle = styled(BaseTitle)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme["base-subtitle"]};
`;
