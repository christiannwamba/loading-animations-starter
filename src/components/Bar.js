import React from 'react';
import LoadWrapper from './LoadWrapper';

function Square() {
  return (
    <LoadWrapper>
      <p>Bar Loading</p>
      <div className="bar"></div>
    </LoadWrapper>
  );
}

export default Square;
