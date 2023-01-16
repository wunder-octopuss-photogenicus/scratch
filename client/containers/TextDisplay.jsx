import React from 'react';

import CharDisplay from '../components/CharDisplay.jsx'


// track keydown events 

const TextDisplay = ({targetString}) => (
  <div id="text-display">
    {targetString}
  </div>
)

export default TextDisplay;