import React from 'react';
import LoadWrapper from './LoadWrapper';

function Ring() {
  return (
    <LoadWrapper>
      <p>Ring Loading</p>
      <div className="ring"></div>
    </LoadWrapper>
  );
}

export default Ring;
