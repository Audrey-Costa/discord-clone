import React from "react";
import { Container, Profile, Icons, Avatar, UserData, MicIcon, HeadphoneIcon, SettingsIcon } from "../UserInfo/styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Audrey Costa</strong>
          <span>#4251</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;