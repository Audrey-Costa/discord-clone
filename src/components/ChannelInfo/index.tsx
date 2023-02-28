import React from "react";
import { ChannelContext } from "../../context/ChannelContext";
import { Container, HashtagIcon, Title, Separator, Description } from "../ChannelInfo/styles";

const ChannelInfo: React.FC = () => {
  const { channel } = React.useContext(ChannelContext);
  return (
    <Container>
      <HashtagIcon />
      <Title>{channel.name}</Title>

      <Separator />

      <Description>{channel.description}</Description>
    </Container>
  );
}

export default ChannelInfo;