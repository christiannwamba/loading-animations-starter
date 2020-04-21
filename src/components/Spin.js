import React from 'react';
import LoadWrapper from './LoadWrapper';

function Spin() {
  return (
    <LoadWrapper>
      <p>Spin Loading</p>
      <div className="spinner">
        <div className="ball-holder">
          <div className="ball"></div>
        </div>
      </div>
    </LoadWrapper>
  );
}

export default Spin;
