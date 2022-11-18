import { useOthers, useSelf } from "../../liveblocks.config";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Center
} from '@chakra-ui/react';
import './OthersUpdateGame.scss';

function OthersUpdateGame() {
    // List of other users
    const others = useOthers();
    const { onClose } = useDisclosure();
    let myPresence = useSelf((me) => me.presence);

    function refreshPage(e) {
      //check if space
      console.log(e);
      window.location.assign('http://localhost:3000/');
    }

    function handleKeyChange(event){
      if(event.keyCode == 32){
        event.preventDefault();
        alert('space');
      }
    }

    // If a cursor is on screen (not null), render
    return (
      <div>
        {others.map(({ presence }) =>{
          return (
            <div className="other">
              {presence.isDone && 
                <Modal isOpen={presence.isDone} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader className='modal-header'>Better luck next time!</ModalHeader>
                    <ModalBody className='stats-box'>
                      <div className='stats'>
                        <p>WPM: {myPresence.wpm}</p>
                        <p>Accuracy: {myPresence.accuracy}%</p>
                        <p># of Lines Sent: {myPresence.linesSent}</p>
                      </div>
                    </ModalBody>
                    <Center>
                      <ModalFooter>
                        <Button colorScheme='teal' mr={3} onClick={refreshPage} onKeyPress={handleKeyChange}>
                          Play Again
                        </Button>
                      </ModalFooter>
                    </Center>
                  </ModalContent>
                </Modal>
              }
              <div>
                <div className="others-stats">
                  <p>opponent: {presence.nickname}</p>
                  <p>words left: {presence.wordsLeft}</p>
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