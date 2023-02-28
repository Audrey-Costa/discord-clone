import React from "react";

export interface channel {
  name: string,
  description: string
}

type ChannelContextType = {
  channel: channel,
  setChannel: React.Dispatch<React.SetStateAction<channel>>
}

export const ChannelContext = React.createContext<ChannelContextType>({channel: {name: '', description: ''}, setChannel: () => {}});