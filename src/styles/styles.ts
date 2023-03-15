import styled from "styled-components";

export const BaseTitle = styled.h2`
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme["base-title"]};
`;

export const BaseText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme["base-text"]};
`;
