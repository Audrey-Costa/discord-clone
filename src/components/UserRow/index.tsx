import React from "react";
import { User, Avatar } from "../UserRow/styles";
import { AccountCircle } from '@styled-icons/material';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  userAvatar?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, userAvatar }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>
        {userAvatar ? <img src={userAvatar} alt="" /> : <AccountCircle />}
      </Avatar>
      <strong>{nickname}</strong>

      {isBot ? <span>Bot</span> : <></>}
    </User>
  );
}

export default UserRow;