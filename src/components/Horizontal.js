import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSprings, animated } from 'react-spring';

function Horizontal() {
  const lines = [1, 2, 3];
  const springs = useSprings(
    lines.length,
    lines.map((line, i) => ({
      from: { width: 15 },
      to: async (next) => {
        while (true) {
          await next({ width: 15 });
          await next({ width: 30 });
        }
      },
      config: { duration: 500 },
      delay: 1000 * (line / 2),
    }))
  );
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Horizontal Loading</p>
        {springs.map((props, i) => (
          <animated.div key={i} className="line" style={props}></animated.div>
        ))}
      </div>
    </LoadWrapper>
  );
}

export default Horizontal;
