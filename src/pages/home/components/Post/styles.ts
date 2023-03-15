import styled from "styled-components";
import { BaseText, BaseTitle } from "../../../../styles/styles";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme["base-post"]};
  .postHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .postDate {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-span"]};
  }
`;

export const PostTitle = styled(BaseTitle)`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 20ch;
`;

export const PostContent = styled(BaseText)`
  margin-top: 20px;
`;
