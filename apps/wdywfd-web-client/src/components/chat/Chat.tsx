import React from 'react'

export interface ChatProps {
    readonly channelList: React.ReactNode,
    readonly channel: React.ReactNode,
    readonly client: any,
    readonly theme: string
}

const Chat = (props: ChatProps) => {  
    return (
        <div className={ `chat ${props.theme}` }>
            <div className="channelList">{ props.channelList }</div>
            <div className="channelList">{ props.channel }</div>
        </div>
    )
}

export default Chat;
