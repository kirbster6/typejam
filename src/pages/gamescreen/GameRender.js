import { useState } from 'react';
import { useUpdateMyPresence, useOthers, useBroadcastEvent, useEventListener } from "../../liveblocks.config";
import SelfUpdateGame from "./SelfUpdateGame";
import OthersUpdateGame from "./OthersUpdateGame";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Center,
} from '@chakra-ui/react';

import './GameRender.scss';

function GameRender({curr_user_nickname}) {
  const updateMyPresence = useUpdateMyPresence();
  updateMyPresence({nickname : curr_user_nickname, isDone: false});
  const others = useOthers();

  const broadcast = useBroadcastEvent();

  const { onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(true);

  useEventListener(({ event }) => {
    if (event.type === "READY") {
        setIsOpen(false);
    }
  });

  return (
    <div className="game-screen">
      <Modal isOpen={isOpen} onClose={onClose} classid="modal">   
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='modal-header'>waiting for players...</ModalHeader>
          
          <ModalBody className='waiting-room'>
            {others.map(({ presence }) =>{
              return (<div>{presence.nickname}</div>);
              })
            }
          </ModalBody>
          <Center>
            <ModalFooter>
                <Button colorScheme='teal' 
                  onClick={() => {
                    setIsOpen(false);
                    broadcast({ type: "READY" });
                   }
                  } >
                  start
                </Button>
            </ModalFooter>
            </Center> 
          </ModalContent>
      </Modal>

      <SelfUpdateGame className="self-game"/>
      <OthersUpdateGame className="other-game"/>
    </div>
  );
}

export default GameRender;