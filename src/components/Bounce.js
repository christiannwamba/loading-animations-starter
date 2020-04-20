import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSprings, animated } from 'react-spring';

function Bounce() {
  const lines = [1, 2, 3];
  const springs = useSprings(
    lines.length,
    lines.map((line) => ({
      from: { y: 0 },
      to: async (next) => {
        while (true) {
          await next({ y: 0 });
          await next({ y: 15 });
        }
      },
      config: { duration: 500 },
      delay: 1000 * (line / 3),
    }))
  );
  return (
    <LoadWrapper>
      <div className="load-vertical">
        <p>Trailing Loading</p>
        {springs.map((props, i) => (
          <animated.div
            key={i}
            className="line"
            style={{
              transform: props.y.interpolate((y) => `translate(0, ${y}px)`),
            }}
          ></animated.div>
        ))}
      </div>
    </LoadWrapper>
  );
}

export default Bounce;
