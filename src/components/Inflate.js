import React from 'react';
import LoadWrapper from './LoadWrapper';

function Square() {
  return (
    <LoadWrapper>
      <p>Inflate Loading</p>
      <div className="line"></div>
    </LoadWrapper>
  );
}

export default Square;
