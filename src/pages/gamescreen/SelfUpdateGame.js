import { useUpdateMyPresence } from "../../liveblocks.config";

function SelfUpdateGame() {

  const updateMyPresence = useUpdateMyPresence();

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onPointerMove={(e) =>
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
      }
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    />
  );
}

export default SelfUpdateGame;