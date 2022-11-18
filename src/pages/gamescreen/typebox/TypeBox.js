import React, {useState, useMemo, useRef} from 'react';
import './TypeBox.scss';
import {useSelf, useUpdateMyPresence, useBroadcastEvent, useEventListener} from '../../../liveblocks.config.js';

import useTypingGame , { CharStateType } from 'react-typing-game-hook';

const randomWords = require('random-words');

var remainingWords = 0;
let input = "";

let tempWords = "";
let tempWordStreak = 0;

// everytime a line is sent, add the number of words from the "added" line to remainingWords, and change display so that it shows 4 lines
// this goes onward until you hit 8 lines displayed at once, you lose 

// This function generates 50 lines of random words of exactly length 60
function getLines(numLines, maxLength){
    let lines = new Array(numLines);
    let lineWordCount =  new Array(numLines);
    for (let i = 0; i < numLines; i++){
        lines[i] = "";
        lineWordCount[i] = 0;
    }
    let index = 0;
    while(index < numLines){
        let newWord = randomWords();
        let newTotalLength = lines[index].length + newWord.length + 1; // 1 is for the space
        if (maxLength - newTotalLength == 0){
            lines[index] += newWord + " ";
            lineWordCount[index] ++;
            index++;
        }
        else if ((maxLength - newTotalLength <= 3)){
            continue;
        }
        else if (newTotalLength < maxLength){ 
            lines[index] += newWord + " ";
            lineWordCount[index] ++;
        }
        
    }
    return [lines, lineWordCount];

}

let lines = getLines(50, 60);
let text = lines[0].join("");
let lineWordCount = lines[1]; //arr of all the word counts
let wordRequirement = 0;

//add the word count for the first 3 lines to the remaining number of words 
for (let i = 0; i < 3; i++){
    remainingWords += lineWordCount[i];
    wordRequirement += lineWordCount[i];
}

function updatePresenceCurrentText(currIndex) {
    let currentLines = "";
    text.split("").map((char, index) => {
        // index / 60 -> what line you're on
        // display line + 2 more lines
        let currLineNum = Math.floor((currIndex+1) / 60);
        let lineNum = Math.floor((index) / 60);

        if (lineNum >= currLineNum && lineNum <= currLineNum + 4) {
            currentLines += char;
        }
    });

    return currentLines;
}

const TypeBox = (input_data) => {
    const nickname = input_data.nickname;
    let myPresence = useSelf((me) => me.presence);

    const broadcast = useBroadcastEvent();
    const updateMyPresence = useUpdateMyPresence();
    updateMyPresence({wordsLeft : remainingWords});

    let wpm = 0;
    const {
        states: {
          charsState,
          length,
          currIndex,
          currChar,
          correctChar,
          errorChar,
          phase,
          startTime,
          endTime
        },
        actions: { insertTyping, resetTyping, deleteTyping, setCurrIndex, getDuration, endTyping }
      } = useTypingGame(text, {
        skipCurrentWordOnSpace: false,
        pauseOnError: true,
        countErrors: 'everytime'
      });
    
    useEventListener(({ event }) => {
        if (event.type === "ADDWORDS") {
            let prevWordsLeft = myPresence.wordsLeft;
            updateMyPresence({wordsLeft : prevWordsLeft + event.numSent});
            remainingWords = prevWordsLeft + event.numSent;
        }
    });

    let currentLines = updatePresenceCurrentText(currIndex);
    updateMyPresence({linesShown: currentLines});

    const handleKey = (key) => {
        if (remainingWords > 0){
            if (key === "Backspace") {
                if (charsState[currIndex + 1] === CharStateType.Incorrect) {
                    if (currIndex === -1) {
                        insertTyping(currChar);
                        deleteTyping(false);
                    } else {
                        charsState[currIndex + 1] = CharStateType.Incomplete;
                        deleteTyping(false);
                        insertTyping(currChar);
                    }
                } else {
                    deleteTyping(false);
                }
                if (currChar === " ") {
                    remainingWords++;
                    updateMyPresence({wordsLeft : remainingWords});
                }
            } else if (key.length === 1) {
                
                if(charsState[currIndex+1] !== CharStateType.Incorrect){
                    input += key;
                    if (currChar === " ") {
                        remainingWords--;
                        updateMyPresence({wordsLeft : remainingWords});
                    }
                    // takes care of noting the winning streaks (10 words with no errors)
        
                    tempWords += key;
                    tempWordStreak = tempWords.split(" ").length -1;
                    if (tempWordStreak != 0 && tempWordStreak%10 == 0){
                        broadcast({ type: "ADDWORDS", numSent: 10 });
                    }
                }
                else{
                    tempWords = "";
                    tempWordStreak = 0;
        
                }
                insertTyping(key);
        
                if(remainingWords <= 0){
                    endTyping();
                    updateMyPresence({isDone: true});
                }
            }
            let currentLines = updatePresenceCurrentText(currIndex);
            updateMyPresence({linesShown: currentLines});
        }
    };

    return(
      <div className = "typing-box">
        <div className="stats">
            <p >words remaining: {remainingWords}</p>
            <p >streak: {tempWordStreak}</p>
        </div>
        <div
            className="typing-test"
            onKeyDown={(e) => {
            handleKey(e.key);
            e.preventDefault();
            }}
            tabIndex={0}
        >
            {text.split("").map((char, index) => {
                // index / 60 -> what line you're on
                // display line + 2 more lines
                let currLineNum = Math.floor((currIndex+1) / 60);
                let lineNum = Math.floor((index) / 60);

                if (lineNum >= currLineNum && lineNum <= currLineNum + 4) {
                    let state = charsState[index];
                    let color = state === 0 ? "#6D7D8A" : state === 1 ? "#E2F2F5" : "#E32B2B";
                    return (
                        <span
                        key={char + index}
                        style={{ color }}
                        className={currIndex + 1 === index ? "curr-letter" : ""}
                        >
                        {char}
                        </span>
                    );
                }
            })}
        </div>
        <div className="sub-text">
            <div className="stats">
                <p>wpm: {Math.round(60000/getDuration()*(correctChar/5))}</p>
                <p>accuracy: {Math.round(correctChar/(errorChar+correctChar)*100)}%</p>
            </div>
            <div>
                <p>player: { nickname }</p>
            </div>
        </div>
    </div>
    )


}

export default TypeBox;
   