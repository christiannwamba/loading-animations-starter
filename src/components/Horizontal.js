import React from 'react';
import LoadWrapper from './LoadWrapper';

function Horizontal() {
  
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Horizontal Loading</p>
        <div className="line" ></div>
        <div className="line" ></div>
        <div className="line" ></div>
      </div>
    </LoadWrapper>
  );
}

export default Horizontal;
