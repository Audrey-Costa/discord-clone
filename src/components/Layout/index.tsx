import React, { useState } from "react";
import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";
import { channel, ChannelContext } from '../../context/ChannelContext';

const Layout: React.FC = () => {
  const [channel, setChannel] = useState<channel>({name: "chat-livre", description: "Canal aberto para conversas"});
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelContext.Provider value={{channel, setChannel}}>
        <ChannelInfo />
        <ChannelList />
        <ChannelData />
      </ChannelContext.Provider>
      <UserInfo />
      <UserList />
    </ Grid>
  );
}

export default Layout;