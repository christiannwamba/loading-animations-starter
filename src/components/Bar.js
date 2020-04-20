import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useSpring, animated } from 'react-spring';

function Square() {
  const [reverse, setReverse] = React.useState(false);
  const props = useSpring({
    from: { x: 0, backgroundColor: '#4b9cdb', width: 15 },
    to: { x: 80, backgroundColor: '#f5634a', width: 30 },
    config: { duration: 1500 },
    reverse,
    onRest: () => setReverse((rev) => !rev),
  });

  return (
    <LoadWrapper>
      <p>Bar Loading</p>
      <animated.div
        className="bar"
        style={{
          ...props,
          transform: props.x.interpolate((x) => `translateX(${x}px)`),
        }}
      ></animated.div>
    </LoadWrapper>
  );
}

export default Square;
