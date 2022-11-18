import { useOthers } from "../../liveblocks.config";
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
import './OthersUpdateGame.scss';

function OthersUpdateGame() {
    // List of other users
    const others = useOthers();
    const { onClose } = useDisclosure();

    function refreshPage() {
      window.location.assign('http://localhost:3000/');
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
                    <ModalHeader>LOSER</ModalHeader>
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