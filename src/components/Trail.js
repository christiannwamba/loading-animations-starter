import React from 'react';
import LoadWrapper from './LoadWrapper';
import { useTrail, animated } from 'react-spring';
import BezierEasing from 'bezier-easing';

function Trail() {
  const loadingText = 'Loading...'.split('');
  const [reverse, setReverse] = React.useState(false)
  const trail = useTrail(loadingText.length, {
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 1500, easing: BezierEasing(0.17, 0.37, 0.43, 0.67) },
    reverse,
    onRest: () => setReverse(rev => !rev)
  });
  return (
    <LoadWrapper>
      <p>Trail Loading</p>
      <div className="letter-holder">
        {trail.map((props, index) => {
          return (
            <animated.div className="l-1 letter" key={index} style={props}>
              {loadingText[index]}
            </animated.div>
          );
        })}
      </div>
    </LoadWrapper>
  );
}

export default Trail;
