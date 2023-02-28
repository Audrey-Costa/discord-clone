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

      <ChannelButton channelName="chat-livre" channelDescription="Canal aberto para conversas" />
      <ChannelButton channelName="Trabalho" channelDescription="" />
      <ChannelButton channelName="Lolzinho" channelDescription="Só pode falar de LOL!" />
      <ChannelButton channelName="Animes" channelDescription="Sem Spoilers!" />
      <ChannelButton channelName="Jogos" channelDescription="Vamos jogar o que hoje?" />
    </Container>
  );
}

export default ChannelList;