import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

import './HomePage.scss';

import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [nickname, setNickname] = useState("");
  console.log(nickname);

  return (
    <div className="header">
        <p className="title">
          <FontAwesomeIcon icon={faKeyboard} />
          &nbsp;typejam.
        </p>
        <form className="nickname-form">
            <Input type="text" value={nickname} onChange={(ev) => setNickname(ev.target.value)} placeholder="enter a nickname." />
            <Link to="/play" state={{nickname: nickname}}>
              <Button colorScheme='teal'>join</Button>
            </Link>
        </form>
    </div>
  )
}

export default HomePage