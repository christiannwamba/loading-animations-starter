import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSprings, animated } from 'react-spring';

function Vertical() {
  const lines = [1, 2, 3];
  const springs = useSprings(
    lines.length,
    lines.map((line) => ({
      from: { height:15 },
      to: async (next) => {
        while (true) {
          await next({ height: 15 });
          await next({ height: 35 });
        }
      },
      config: { duration: 1000 },
      delay: line === 1 || line === 3 ? 1000 : 0
    }))
  );
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Vertical Loading</p>
        {springs.map((props, i) => (
          <animated.div key={i} className="line" style={props}></animated.div>
        ))}
      </div>
    </LoadWrapper>
  );
}

export default Vertical;
