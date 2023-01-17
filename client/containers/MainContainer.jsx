import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay.jsx';
import Keyboard from '../components/Keyboard.jsx';

const MainContainer = () => {
  const [target, targetSetter] = useState('');
  // targetString is an array of string characters in html span elements
  // const [targetString, targetStringSetter] = useState([]);
  const [targetIndex, indexSetter] = useState(0);

  useEffect(() => {
    fetchTargetString(targetSetter);
  }, []); // TODO: track when they've typed successfully
  
  return (
  <section id="main-container">
    <TextDisplay target={target} targetIndex={targetIndex}/>
    <Keyboard 
      target={target} 
      // targetString={targetString}
      targetIndex={targetIndex} 
      indexSetter={indexSetter}
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