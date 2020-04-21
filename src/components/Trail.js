import React from 'react';
import LoadWrapper from './LoadWrapper';

function Trail() {
  const loadingText = 'Loading...'.split('');

  return (
    <LoadWrapper>
      <p>Trail Loading</p>
      <div className="letter-holder">
        {loadingText.map((text, index) => {
          return (
            <div className="l-1 letter" key={index}>
              {text}
            </div>
          );
        })}
      </div>
    </LoadWrapper>
  );
}

export default Trail;
