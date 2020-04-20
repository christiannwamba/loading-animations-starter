import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated, config } from 'react-spring';

function Square() {
  const [reverse, setReverse] = React.useState(false);
  const props = useSpring({
    from: { s: 0.5 },
    to: async (next) => {
      for (let i = 0.5; i <= 2; i += 0.2) {
        await next({ s: i });
      }
    },
    reverse,
    config: config.gentle,
    onRest: () => setReverse((rev) => !rev),
  });
  return (
    <LoadWrapper>
      <p>Inflate Loading</p>
      <animated.div
        className="line"
        style={{
          transform: props.s.interpolate((s) => `scale(${s})`),
        }}
      ></animated.div>
    </LoadWrapper>
  );
}

export default Square;
