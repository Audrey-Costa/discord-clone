import React from "react";
import ChannelButton from "../ChannelButton/index";
import { Container, Category, AddCategoryIcon } from "../ChannelList/styles";
import { ChannelContext } from "../../context/ChannelContext";

const ChannelList: React.FC = () => {
  const { channel } = React.useContext(ChannelContext);
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>      

      <ChannelButton channelName="chat-livre" channelDescription="Canal aberto para conversas" selected={channel.name === "chat-livre" }/>
      <ChannelButton channelName="Trabalho" channelDescription="" selected={channel.name === "Trabalho" }/>
      <ChannelButton channelName="Lolzinho" channelDescription="Só pode falar de LOL!" selected={channel.name === "Lolzinho" }/>
      <ChannelButton channelName="Animes" channelDescription="Sem Spoilers!" selected={channel.name === "Animes" }/>
      <ChannelButton channelName="Jogos" channelDescription="Vamos jogar o que hoje?" selected={channel.name === "Jogos" }/>
    </Container>
  );
}

export default ChannelList;