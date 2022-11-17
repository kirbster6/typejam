import { useOthers } from "../../liveblocks.config";

function OthersUpdateGame() {
    // List of other users
    const others = useOthers();
  
    // If a cursor is on screen (not null), render
    return (
      <>
        {others.map(({ connectionId, presence }) =>
          presence.cursor ? (
            <Cursor
              key={connectionId}
              x={presence.cursor.x}
              y={presence.cursor.y}
            />
          ) : null
        )}
      </>
    );
  }
  
  // Basic cursor component
  function Cursor({ x, y }) {
    console.log("wait")
    return (
        <div>
            <p>Maybe Working/</p>
            <img
                style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
                }}
                src="public\logo512.png"
            />
        </div>
        
    );
  }
export default OthersUpdateGame;