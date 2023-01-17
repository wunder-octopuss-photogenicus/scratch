import React from 'react';

const LiveStatsContainer = ({stats}) => (
  <div id="stats-container">
    <div>words per minute: {stats.wpm}</div>
    <div>characters per minute: {stats.cpm}</div>
    <div>accuracy: {stats.accuracy} %</div>
  </div>
)

export default LiveStatsContainer;