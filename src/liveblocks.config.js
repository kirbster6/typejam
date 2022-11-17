import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_lpph-cx_D8Cn7wpc3UC5ictrN9wLGADO1yiT6QEhQD_jTZdK4dPU8vAHBgKHk9bL",
});

export const { 
    suspense: {
        RoomProvider,
        useOthers,
        useUpdateMyPresence,
    }, 
} = createRoomContext(client);