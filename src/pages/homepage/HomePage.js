import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import typejam from '../../assets/typejam.png'; 


import './HomePage.scss';

import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [nickname, setNickname] = useState("");
  console.log(nickname);

  return (
    <div className="header">
      
        <div className="title">
          <Image src={typejam} alt="Type Jam"></Image>
        </div>
        
        <form className="nickname-form">
            <Input id="nickname-input" type="text" value={nickname} onChange={(ev) => setNickname(ev.target.value)} placeholder="enter a nickname." />
            <Link to="/play" state={{nickname: nickname}}>
              <Button id="join-button" colorScheme='teal'>join</Button>
            </Link>
        </form>
    </div>
  )
}

export default HomePage