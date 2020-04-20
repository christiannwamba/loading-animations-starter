import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated } from 'react-spring';
import BezierEasing from 'bezier-easing';

function Square() {
  const [reverse, setReverse] = React.useState(false);
  const spinner = useSpring({
    from: { r: 0 },
    to: async (next) => {
      while (true) {
        await next({ r: 360 });
      }
    },
    config: { duration: 1500 },
    reset: true,
  });

  const bubble1 = useSpring({
    from: { s: 0 },
    to: { s: 1 },
    reverse: reverse,
    config: { easing: BezierEasing(0.17, 0.37, 0.43, 0.67) },
    onRest: () => setReverse((rev) => !rev),
  });
  const bubble2 = useSpring({
    from: { s: 0 },
    to: { s: 1 },
    delay: 500,
    reverse: reverse,
    config: { easing: BezierEasing(0.42, 0, 0.58, 1) },
    onRest: () => setReverse((rev) => !rev),
  });
  return (
    <LoadWrapper>
      <p>Bubble Loading</p>
      <animated.div
        className="spinner"
        style={{
          transform: spinner.r.interpolate((r) => `rotate(${r}deg)`),
          border: 'none',
        }}
      >
        <animated.div
          className={`bubble-1`}
          style={{
            transform: bubble1.s.interpolate((s) => `scale(${s})`),
          }}
        ></animated.div>
        <animated.div
          className={`bubble-2`}
          style={{
            transform: bubble2.s.interpolate((s) => `scale(${s})`),
          }}
        ></animated.div>
      </animated.div>
    </LoadWrapper>
  );
}

export default Square;
