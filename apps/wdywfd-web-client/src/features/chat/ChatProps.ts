import { PropsWithChildren } from "react"

export interface ChatProps extends PropsWithChildren<any> {
    readonly channelList: React.ReactNode
    readonly client: any
    readonly theme: string
}
