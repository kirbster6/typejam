import { useUpdateMyPresence, useSelf } from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

function SelfUpdateGame() {
  const myPresence = useSelf((me) => me.presence);

  return (
    <div>
      <div className="SelfGame">
        {myPresence.isDone && <div>u a winner</div>}
        <TypeBox nickname={myPresence.nickname} ></TypeBox>
      </div>
    </div>
  );
}

export default SelfUpdateGame;