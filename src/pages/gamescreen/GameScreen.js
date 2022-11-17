import React from 'react';
import { useLocation } from "react-router-dom";

import './GameScreen.scss';

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider, useOthers, useUpdateMyPresence } from "../../liveblocks.config.js";
import GameRender from './GameRender';


const GameScreen = () => {
    // const others = useOthers();
    const location = useLocation();
    const nickname = location.state?.nickname;
    
    
    return (
        <div>
          {/* <h1>{nickname}</h1> */}
            <RoomProvider id="my-room-id" initialPresence={{}}>
                <ClientSideSuspense fallback={<div>Loading...</div>}>
                    { () => <GameRender curr_user_nickname={nickname} />}
                </ClientSideSuspense>
            </RoomProvider>
        </div>
    )
}

export default GameScreen;