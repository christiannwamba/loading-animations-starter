import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated } from 'react-spring';
import BezierEasing from 'bezier-easing';

function Ring() {
  const props = useSpring({
    from: { r: 0 },
    to: async (next) => {
      while (true) {
        await next({ r: 180 });
        await next({ r: 360 });
      }
    },
    config: { duration: 1500, easing: BezierEasing(0.17, 0.37, 0.43, 0.67) },
    reset: true,
  });
  return (
    <LoadWrapper>
      <p>Ring Loading</p>
      <animated.div
        className="ring"
        style={{
          transform: props.r.interpolate((r) => `rotate(${r}deg)`),
        }}
      ></animated.div>
    </LoadWrapper>
  );
}

export default Ring;
