import React from 'react';

const LiveStatsContainer = ({stats}) => (
  <div id="stats-container">
    <div>wpm: {stats.wpm}</div>
    <div>cpm: {stats.cpm}</div>
    <div>accuracy: {stats.accuracy}</div>
  </div>
)

export default LiveStatsContainer;