import React from 'react'
import { ChatProps } from './ChatProps';

const Chat = ({ theme, channelList }: ChatProps) => {  
    return (
        <div className={ `chat ${theme}` }>{ channelList }</div>
    )
}

export default Chat;
