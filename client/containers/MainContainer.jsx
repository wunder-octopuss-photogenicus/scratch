import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay.jsx';
import Keyboard from '../components/Keyboard.jsx';

const MainContainer = () => {
  const [target, targetSetter] = useState('');
  // targetString = array of string characters in html span elements
  const [targetString, targetStringSetter] = useState([]);
  const [lastCorrectInputIndex, indexSetter] = useState(0);

  useEffect(() => {
    fetchTargetString(targetSetter);
  }, []); // TODO: track when they've typed successfully
  

  useEffect(() => {
    stringSpan(target, targetStringSetter);
  }, [target])
  
  return (
  <section id="main-container">
    <TextDisplay targetString={targetString}/>
    <Keyboard 
      target={target} 
      correctIndex={lastCorrectInputIndex} 
      indexSetter={indexSetter}
    />
  </section>
  )
}


function stringSpan (target, targetStringSetter) {
  // create an array to store each character from the target string as an individual span element
  let stringSpan = []
  // separate each string character into its own span element, and store in stringSpan
  target.split('').forEach((char, i)=> {
    stringSpan.push(<span key={i}>{char}</span>);
  });
  // update the state for the targetString
  targetStringSetter(stringSpan);
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