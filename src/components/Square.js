import React from 'react';
import LoadWrapper from './LoadWrapper';

function Square() {
  return (
    <LoadWrapper>
      <p>Square Loading</p>
      <div className="square"></div>
    </LoadWrapper>
  );
}

export default Square;
