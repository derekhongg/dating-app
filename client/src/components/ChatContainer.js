import React from 'react';
import ChatDisplay from './ChatDisplay';
import MatchesDisplay from './MatchesDisplay';
import ChatHeader from './ChatHeader';

function ChatContainer() {
    return (
        <div className='chat-container'>
            <ChatHeader/>

            <div>
                <button className='option'>Matches</button>
                <button className='option'>Chat</button>
            </div>

            <MathcesDisplay/>
            <ChatDisplay/>
        </div>
    )
}

export default ChatContainer