import React from 'react'
import { ChannelList, Chat, Channel } from '..'

const client = {};

const App = () => {
  return (
    <Chat
      channelList={<ChannelList />}
      channel={<Channel />}
      client={client}
      theme="team light"
    />
  )
}

export default App;
