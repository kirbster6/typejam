import { useOthers, useSelf} from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

function OthersUpdateGame() {
    // List of other users
    const others = useOthers();
  
    // If a cursor is on screen (not null), render
    return (
      <div>
        {others.map(({ presence }) =>{
          return (
            <div>
              <p>Other User: {presence.nickname}</p>
              <p>Other User Words Left: {presence.wordsLeft}</p>
            </div>
          ) 
        })}

      </div>
    );
  }
  
  // Basic cursor component
  function Cursor({ x, y }) {
    // console.log("wait")
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