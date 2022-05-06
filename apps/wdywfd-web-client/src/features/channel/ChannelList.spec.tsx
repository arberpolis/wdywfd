import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import ChannelList from './ChannelList';
import { ChannelListProps } from './ChannelListProps';

describe('ChannelList', () => {
    let sut: ReactTestRenderer;

    let props: ChannelListProps = {
        children: [(
            <div className="channel" key="channel-1">Channel 1</div>
        ), (
            <div className="channel" key="channel-2">Channel 2</div>
        )],
        loading: false,
        type: 'team',
    }

    beforeEach(() => {
        sut = renderer.create(<ChannelList { ...props } />);
    });

    it('is defined', () => {
        expect(sut).toBeDefined();
    });
    it('renders correctly', () => {
        expect(sut.toJSON()).toMatchSnapshot();
    });
});
