import { useUpdateMyPresence, useSelf } from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

function SelfUpdateGame() {
  const myPresence = useSelf((me) => me.presence);

  return (
    <div>
      
      <p>My User Nickname: {myPresence.nickname}</p>
      <div className="SelfGame">
        {myPresence.isDone && <div>u a winner</div>}
        <TypeBox nickname={myPresence.nickname} ></TypeBox>
      </div>
    </div>
  );
}

export default SelfUpdateGame;