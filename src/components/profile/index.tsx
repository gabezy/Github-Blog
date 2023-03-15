import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileName,
  ProfileSocial,
} from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
      </ProfileAvatar>
      <ProfileContent>
        <div className="header">
          <ProfileName>Cameron Williamson</ProfileName>
          <a href="#" target={"_blank"}>
            Github
            <ArrowSquareOut size={16} weight="fill" />
          </a>
        </div>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileSocial>
          <div>
            <GithubLogo size={24} weight="fill" />
            <span>cameronwll</span>
          </div>
          <div>
            <Buildings size={24} weight="fill" />
            <span>Rocketseat</span>
          </div>
          <div>
            <Users size={24} weight="fill" />
            <span>32 seguidores</span>
          </div>
        </ProfileSocial>
      </ProfileContent>
    </ProfileContainer>
  );
};
