import { useUpdateMyPresence, useSelf } from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

function SelfUpdateGame() {
  return (
    <div>
      <p>My User Nickname: {useSelf((me) => me.presence.nickname)}</p>
      <div className="SelfGame">
        <TypeBox nickname={useSelf((me) => me.presence.nickname)} ></TypeBox>
      </div>
    </div>
  );
}

export default SelfUpdateGame;