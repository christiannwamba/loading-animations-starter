import React from 'react';
import LoadWrapper from './LoadWrapper';

function Bounce() {
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Bounce Loading</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </LoadWrapper>
  );
}

export default Bounce;
