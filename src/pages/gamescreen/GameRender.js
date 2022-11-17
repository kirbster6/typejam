import { useUpdateMyPresence, useOthers } from "../../liveblocks.config";
import SelfUpdateGame from "./SelfUpdateGame";
import OthersUpdateGame from "./OthersUpdateGame";

function GameRender() {
  const updateMyPresence = useUpdateMyPresence();

  return (
    <div>
      <h1>Rendering Players</h1>
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