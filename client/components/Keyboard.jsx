import React, { useEffect, useState } from 'react';

// look at the value of the input feild
// check length - 1 of input feild against target string unless length is 0

const Keyboard = ({target, targetString, targetIndex, indexSetter, timer, timerSetter, errors, errorsSetter}) => {
  const [inputValue, setInputValue] = useState('');
  // let timerStart

  // useEffect(() => {
  //   if (inputValue.length !== 0) {
  //     if (inputValue[targetIndex] === target[targetIndex]) {
  //       console.log('correct');
  //       indexSetter(targetIndex + 1);
  //     }
  //     else if (inputValue[targetIndex] !== target[targetIndex]) {
  //       console.log('wrong');
  //     }
  //   }
  // }, [inputValue])


  // useEffect(() => {
  //   if (inputValue.length !== 0) {
  //     if (inputValue.length < targetIndex) indexSetter(inputValue.length);
  //     if (target[targetIndex] === inputValue[targetIndex]) {
  //       console.log("correct");
  //       indexSetter(targetIndex+1);
  //     } else console.log("wrong");
  //   }
  // }, [inputValue])

  return (
    <div id="keyboard">
      <input id='text-input' 
        type="text"
        placeholder="Start typing..."
        onKeyDown={(e) => {
          // console.log(e.key)
          if (e.key !== 'Shift' && e.key !== 'Backspace') {
            if (e.key === target[targetIndex]) {
              console.log("correct");
              indexSetter(targetIndex + 1);
            } else {
              console.log("Wrong");
              errorsSetter(errors + 1);
              console.log(errors);
            }
          }
          setInputValue(e.target.value)
          console.log(inputValue)
        }}

        // onChange={(e) => {
        //   setInputValue(e.target.value)
        // }}
        onClick={() => {
          timerSetter(Date.now())
          console.log("timer Start", timer);
        }}
      />
    </div>
  )
}

export default Keyboard;