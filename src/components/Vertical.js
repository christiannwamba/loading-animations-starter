import React from 'react';
import LoadWrapper from './LoadWrapper';

function Vertical() {
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Vertical Loading</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </LoadWrapper>
  );
}

export default Vertical;
