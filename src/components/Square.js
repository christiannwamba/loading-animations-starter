import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated, interpolate } from 'react-spring';

function Square() {
  const [reverse, setReverse] = React.useState(false);
  const props = useSpring({
    from: { x: 0, r: 0 },
    to: { x: 70, r: 360 },
    reverse,
    onRest: () => setReverse((rev) => !rev),
  });
  return (
    <LoadWrapper>
      <p>Square Loading</p>
      <animated.div
        className="square"
        style={{
          transform: interpolate(
            [props.x, props.r],
            (x, r) => `translateX(${x}px) rotate(${r}deg)`
          ),
        }}
      ></animated.div>
    </LoadWrapper>
  );
}

export default Square;
