import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay.jsx';
import Keyboard from '../components/Keyboard.jsx';

const MainContainer = () => {
  const [target, targetSetter] = useState('');
  // targetString is an array of string characters in html span elements
  // const [targetString, targetStringSetter] = useState([]);
  const [targetIndex, indexSetter] = useState(0);
  const [timer, timerSetter] = useState(Date.now());
  let wpm, cpm, numWords;

  useEffect(() => {
    if (targetIndex === target.length && targetIndex !== 0) {
      const end = Date.now();
      console.log("start ", timer, "end ", end);
      const numChar = target.length
      numWords = target.split(" ").length;
      const seconds = Math.round((end - timer) /1000);
      //the amount of time = end - timer
      wpm = Math.floor((numWords / seconds) * 60)
      console.log("words per min", wpm, "num words", numWords, "seconds", seconds) 
      indexSetter(0);
      fetchTargetString(targetSetter);
      document.getElementById("text-input").value = '';
    }
  }, [targetIndex]); // TODO: track when they've typed successfully

  useEffect(() => {
    fetchTargetString(targetSetter);
  }, []); 

  return (
  <section id="main-container">
    <TextDisplay target={target} targetIndex={targetIndex}/>
    <Keyboard 
      target={target} 
      targetIndex={targetIndex} 
      indexSetter={indexSetter}
      timer={timer}
      timerSetter={timerSetter}
    />
  </section>
  )
}

async function fetchTargetString(targetSetter) {
  try {
    const res = await fetch('api/newgame');
    const data = await res.json();
    targetSetter(data);
  } catch (err) {
    console.log(err);
  }
}



export default MainContainer;