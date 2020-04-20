import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated } from 'react-spring';

function Spin() {
  const props = useSpring({
    from: { r: 0 },
    to: async (next) => {
      while (true) {
        await next({ r: 360 });
      }
    },
    config: { duration: 1500 },
    reset: true,
  });
  return (
    <LoadWrapper>
      <p>Spin Loading</p>
      <animated.div
        className="spinner"
       
      >
        <animated.div className="ball-holder"  style={{
          transform: props.r.interpolate((r) => `rotate(${r}deg)`),
        }}>
          <div className="ball"></div>
        </animated.div>
      </animated.div>
    </LoadWrapper>
  );
}

export default Spin;
