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
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import TypeBox from "./typebox/TypeBox";
import './SelfUpdateGame.scss';

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
      <div className="SelfGame" >
        {myPresence.isDone && 
          <Modal isOpen={myPresence.isDone} onClose={onClose} classid="modal">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className='modal-header'>CONGRATS, you won!</ModalHeader>
              <ModalBody className='stats-box'>
                <div className='stats'>
                    <p>WPM:  {myPresence.wpm}</p>
                    <p>Accuracy:  {myPresence.accuracy}%</p>
                    <p># of Lines Sent:  {myPresence.linesSent}</p>
                  </div>
              </ModalBody>
              <Center>
                <ModalFooter>
                    <Button colorScheme='teal'   onClick={refreshPage} >
                      Play Again
                    </Button>
                </ModalFooter>
                </Center> 
              </ModalContent>
          </Modal>
        }
        <TypeBox nickname={myPresence.nickname} ></TypeBox>
      </div>
    </div>
  );
}

export default SelfUpdateGame;