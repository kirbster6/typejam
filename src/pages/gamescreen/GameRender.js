import { useUpdateMyPresence } from "../../liveblocks.config";
import SelfUpdateGame from "./SelfUpdateGame";
import OthersUpdateGame from "./OthersUpdateGame";


import './GameRender.scss';

function GameRender({curr_user_nickname}) {
  const updateMyPresence = useUpdateMyPresence();
  updateMyPresence({nickname : curr_user_nickname, isDone: false});

  return (
    <div className="game-screen">
      <SelfUpdateGame className="self-game"/>
      <OthersUpdateGame className="other-game"/>
    </div>
  );
}

export default GameRender;