import React from "react";
import ChannelButton from "../ChannelButton/index";
import { Container, Category, AddCategoryIcon } from "../ChannelList/styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>      

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="Lolzinho" />
      <ChannelButton channelName="Animes" />
      <ChannelButton channelName="Jogos" />
    </Container>
  );
}

export default ChannelList;