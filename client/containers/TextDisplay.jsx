import React, { useEffect, useState } from 'react';

import CharDisplay from '../components/CharDisplay.jsx'


// track keydown events 

const TextDisplay = ({target, targetIndex}) => {
  let targetString = target.split('').map((char, index) => {

    if (index < targetIndex) {
      return <span key={index} className={"correct"}>{char}</span>
    } else if (index === targetIndex) {
      return <span key={index} className={"underline"}>{char}</span>
    } else {
      return <span key={index}>{char}</span>
    }
  });

  return (
    <div id="text-display">
      {targetString}
    </div>
  )
}



// function stringSpan (target, targetStringSetter) {
//   // create an array to store each character from the target string as an individual span element
//   let stringSpan = []
//   let classlist = [];
//   if (targetString && targetString[targetIndex]) {
//     targetString[targetIndex].classList.add('correct');
//   }
//   // separate each string character into its own span element, and store in stringSpan
//   target.split('').forEach((char, i)=> {
//     stringSpan.push(<span key={i} className={classlist}>{char}</span>);
//   });
//   // update the state for the targetString
//   targetStringSetter(stringSpan);
// }


export default TextDisplay;