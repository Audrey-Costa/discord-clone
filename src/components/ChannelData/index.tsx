import React from "react";
import { ChannelContext } from "../../context/ChannelContext";
import { Container, Messages, InputWrapper, Input, InputIcon } from "../ChannelData/styles";

const ChannelData: React.FC = () => {
  const { channel } = React.useContext(ChannelContext);
  return (
    <Container>
      <Messages/>
      <InputWrapper>
        <Input type="text" placeholder={`Conversar em ${channel.name}`}/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;