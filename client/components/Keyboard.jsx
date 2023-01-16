import React, { useEffect, useState } from 'react';

// look at the value of the input feild
// check length - 1 of input feild against target string unless length is 0


const buffer = [];

const Keyboard = ({target, correctIndex, indexSetter}) => {
  const [inputValue, setInputValue] = useState('');
  // let timerStart


  useEffect(() => {
    if (inputValue.length !== 0) {
      if (inputValue.length < correctIndex) indexSetter(inputValue.length);
      if (target[correctIndex] === inputValue[correctIndex]) {
        console.log("correct");
        indexSetter(correctIndex+1);
      } else console.log("wrong");
    }
  }, [inputValue])

  return (
    <div id="keyboard">
      <input id='text-input' 
        type="text" 
        onKeyDown={(e) => {
          console.log(e.key)
          if (e.key !== 'Shift' || e.key !== 'Backspace') buffer.push(e.key)
          //if (e.key === 8) buffer.pop();
          console.log(buffer);
          setInputValue(e.target.value)
        }}
      />
    </div>
  )
}

export default Keyboard;