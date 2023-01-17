import React from 'react';

const LiveStatsContainer = ({stats}) => (
  <div id="stats-container">
    <div>Words per minute: {stats.wpm}</div>
    <div>Characters per minute: {stats.cpm}</div>
    <div>Accuracy: {stats.accuracy} %</div>
  </div>
)

export default LiveStatsContainer;