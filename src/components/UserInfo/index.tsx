import React from "react";
import { Container, Profile, Icons, Avatar, UserData, MicIcon, HeadphoneIcon, SettingsIcon } from "../UserInfo/styles";
import UserAvatar from '../../assets/kawaii5.jpg';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src={UserAvatar}/>
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