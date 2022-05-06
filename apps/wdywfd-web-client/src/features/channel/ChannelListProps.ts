import { PropsWithChildren, } from "react";
import { ChannelType } from "./ChannelType";

export interface ChannelListProps extends PropsWithChildren<{}> {
    readonly error?: boolean
    readonly loading: boolean
    readonly type: ChannelType
}   // ChannelProps

