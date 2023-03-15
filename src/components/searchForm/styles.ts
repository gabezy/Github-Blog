import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  margin-top: 12px;
`;

export const SearchFormInput = styled.input`
  flex: 1;
  border-radius: 6px;
  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-border"]};
  color: ${({ theme }) => theme["base-text"]};
  padding: 12px 16px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }
`;
