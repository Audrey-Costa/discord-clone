import React from "react";
import { ChannelContext } from "../../context/ChannelContext";
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "../ChannelButton/styles";

export interface Props {
  channelName: string;
  channelDescription: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, channelDescription, selected }) => {
  const { setChannel } = React.useContext(ChannelContext);
  return (
    <Container className={selected ? 'active' : ''} 
      onClick={() => {
        if(!selected){
          setChannel({name: channelName, description: channelDescription})
        }
        selected = true;
      }}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;