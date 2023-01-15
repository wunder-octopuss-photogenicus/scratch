import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay.jsx';
import Keyboard from '../components/Keyboard.jsx';

const MainContainer = () => {
  const [targetString, targetStringSetter] = useState('');

  useEffect(() => {
    const fetchString = async () => {
      try {
        const res = await fetch('api/newgame');
        const data = await res.json();
        targetStringSetter(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchString();
  }, []);
  return (
  <section id="main-container">
    <TextDisplay targetString={targetString}/>
    <Keyboard targetString={targetString}/>
  </section>
  )
}

export default MainContainer;