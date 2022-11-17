import { useUpdateMyPresence, useSelf } from "../../liveblocks.config";
import TypeBox from "./typebox/TypeBox";

function SelfUpdateGame() {

  // const updateMyPresence = useUpdateMyPresence();
  // updateMyPresence({ nickname: "Kirby"});
  // const currentUser = useSelf();
  // console.log(currentUser.nickname);
  // console.log("Here");
  return (
    <div>
      <p>My User Nickname: {useSelf((me) => me.presence.nickname)}</p>
      <div className="SelfGame">
        <p>Click on the text below and start typing (esc to reset)</p>
        <TypeBox requiredWords={15} ></TypeBox>
      </div>
    </div>
    // <div
    //   style={{ width: "100vw", height: "100vh" }}
    //   onPointerMove={(e) =>
    //     updateMyPresence({ nickname: "Kirby"} )
    //   }
    //   onMouse={() => updateMyPresence({ cursor: null })} 
    // />
  );
}

export default SelfUpdateGame;