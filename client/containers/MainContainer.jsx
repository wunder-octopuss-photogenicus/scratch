import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay.jsx';
import Keyboard from '../components/Keyboard.jsx';
import LiveStatsContainer from './LiveStatsContainer.jsx';

const MainContainer = () => {
  const [target, targetSetter] = useState('');
  // targetString is an array of string characters in html span elements
  // const [targetString, targetStringSetter] = useState([]);
  const [targetIndex, indexSetter] = useState(0);
  const [timer, timerSetter] = useState(Date.now());
  const [errors, errorsSetter] = useState(0);
  const [stats, statsSetter] = useState({wpm: "n/a", cpm: "n/a", accuracy: "n/a"});

  useEffect(() => {
    // fetchTargetString(targetSetter);
    targetSetter('hello world')
  }, []); 

  useEffect(() => {
    if (targetIndex === target.length && targetIndex !== 0) {
      statsSetter(genStats(target, timer, errors));
      console.log("stats", stats);
      // send stats to server
      fetch ('/api/score', {
        method: 'POST',
        body: JSON.stringify(stats),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

      // clean up previous inputs
      indexSetter(0);
      errorsSetter(0);
      fetchTargetString(targetSetter);
      document.getElementById("text-input").value = '';
    }
  }, [targetIndex]); // TODO: track when they've typed successfully


  return (
  <section id="main-container">
    <LiveStatsContainer stats={stats}/>
    <TextDisplay target={target} targetIndex={targetIndex}/>
    <Keyboard 
      target={target} 
      targetIndex={targetIndex} 
      indexSetter={indexSetter}
      timer={timer}
      timerSetter={timerSetter}
      errors={errors}
      errorsSetter={errorsSetter}
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

function genStats(target, timerStart, errors) {
  const end = Date.now();
  console.log("start ", timerStart, "end ", end);
  const seconds = Math.round((end - timerStart) / 1000);
  const wpm = Math.floor((target.split(" ").length / seconds) * 60)
  const cpm = Math.floor((target.length / seconds) * 60)
  const accuracy = ((target.length - errors) / target.length) * 100
  console.log("accuracy", accuracy, "errors count", errors);
  return {wpm: wpm, cpm: cpm, accuracy: accuracy};
}

export default MainContainer;