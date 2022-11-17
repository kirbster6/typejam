import { useUpdateMyPresence, useOthers } from "../../liveblocks.config";
import SelfUpdateGame from "./SelfUpdateGame";
import OthersUpdateGame from "./OthersUpdateGame";


function GameRender({curr_user_nickname}) {
  const updateMyPresence = useUpdateMyPresence();
  const others = useOthers();
  updateMyPresence({nickname : curr_user_nickname});

  return (
    <div>
      <h1>Rendering Players</h1>
      <h4>Waiting Room:</h4>
      {others.map(({ presence }) =>{
          return (
            <p>{presence.nickname}</p>
          ) 
      })}
      <SelfUpdateGame />
      <OthersUpdateGame />
    </div>
    // <div
    //   style={{ width: "100vw", height: "100vh" }}
    //   onPointerMove={(e) =>
    //     updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
    //   }
    //   onPointerLeave={() => updateMyPresence({ cursor: null })}
    // />
  );
}

export default GameRender;