import { useOthers, useSelf} from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

import './OthersUpdateGame.scss';

function OthersUpdateGame() {
    // List of other users
    const others = useOthers();
  
    // If a cursor is on screen (not null), render
    return (
      <div>
        {others.map(({ presence }) =>{
          return (
            <div className="other">
              {presence.isDone && <div>ur a loser</div>}
              <div>
                <div className="others-stats">
                  <p>Other User: {presence.nickname}</p>
                  <p>Other User Words Left: {presence.wordsLeft}</p>
                </div>
                <div className="others-words">
                  <p>{presence.linesShown}</p>
                </div>
              </div>
            </div>
          ) ;
        })}
      </div>
    );
  }

export default OthersUpdateGame;