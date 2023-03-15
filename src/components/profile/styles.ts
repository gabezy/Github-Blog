import styled from "styled-components";
import { BaseText, BaseTitle } from "../../styles/styles";

export const ProfileContainer = styled.section`
  display: flex;
  gap: 32px;
  background: ${({ theme }) => theme["base-profile"]};
  padding: 32px 32px 32px 40px;

  border-radius: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    a {
      color: ${({ theme }) => theme.blue};
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const ProfileAvatar = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  img {
    object-fit: cover;
    object-position: center center;
    width: inherit;
    height: inherit;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled(BaseTitle)`
  font-size: 1.5rem;
`;

export const ProfileDescription = styled(BaseText)`
  margin-top: 8px;
`;

export const ProfileSocial = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;

    svg {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;
