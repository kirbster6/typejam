import React from 'react';
import './TypeBox.scss';
import {useState} from 'react';

const TypeBox = () =>{

    const TIME_SECONDS = 60;

    const [words, setWords] = useState({
        prevWords: "",
        currentWord: "",
        wrongWord: "",
        nextWord:"",
    });
    const initialWordsTyped = new Array(TIME_SECONDS).fill(0);
    const initialLinesSent = 0;
    const initialLinesRemaining= 0;

    const [numWordsTyped, setNumWordsTyped] = useState(initialWordsTyped);
    const [linesSent, setLinesSent] = useState(initialLinesSent);
    const [linesRemaining, setLinesRemaining] = useState(initialLinesRemaining);

    const start = () =>{
        const time = new Date()
    }



}

