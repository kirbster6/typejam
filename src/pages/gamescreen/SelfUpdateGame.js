import { useUpdateMyPresence, useSelf } from "../../liveblocks.config";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import TypeBox from "./typebox/TypeBox";

function SelfUpdateGame() {
  const updateMyPresence = useUpdateMyPresence();
  const myPresence = useSelf((me) => me.presence);
  const { onClose } = useDisclosure();

  function refreshPage() {
    window.location.assign('http://localhost:3000/');
    updateMyPresence({isDone: false});
  }

  return (
    <div>
      <div className="SelfGame">
        {myPresence.isDone && 
          <Modal isOpen={myPresence.isDone} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>WINNER</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div>pp poo poo</div>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='teal' mr={3} onClick={refreshPage}>
                  Play Again
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
        <TypeBox nickname={myPresence.nickname} ></TypeBox>
      </div>
    </div>
  );
}

export default SelfUpdateGame;