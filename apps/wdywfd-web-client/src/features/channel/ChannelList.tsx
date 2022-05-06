import React from 'react'
import { ChannelListProps } from './ChannelListProps'

const ChannelList = ({ children, error, loading, type }: ChannelListProps) => {
  return (
    <div className="channel-list">
      <div className="channel-list-header">
        <div className="channel-list-header-title">
          <h3>{type}</h3>
        </div>
      </div>
      <div className="channel-list-body">
        {loading && <div className="channel-list-loading">Loading...</div>}
        {error && <div className="channel-list-error">Error!</div>}
        {children}
      </div>
    </div>
  )
}

export default ChannelList
