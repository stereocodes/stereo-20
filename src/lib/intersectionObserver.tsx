import React, { ReactNode, useEffect, useRef, useState } from 'react';


// granularity here because we need to allow many options from props
const observerConfig = {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
}

interface IIntObserverWrap {
  children?: ReactNode
  threshold?: number
  noState?: boolean
}

const IntObserverWrap = (props:IIntObserverWrap) => {
  const observerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [intersected, setIntersected] = useState(false);
  // init the obsever
  observerRef.current = new IntersectionObserver((entries) => onInterChange(entries), observerConfig);

  useEffect(() => {
    // observe the wrapper element when its ready.
    if (wrapperRef.current) {
      observerRef.current.observe(wrapperRef.current);
    }
    
    return () => {
      // remove observer on cleanup
      observerRef.current.unobserve(wrapperRef.current)
    }
  }, [wrapperRef]);

  function onInterChange(entries:any) {
    entries.forEach((entry:any) => {
      if (entry.intersectionRatio > props.threshold) {
        if (!props.noState) {
          setIntersected(true);
        }
      } else {
        setIntersected(false);
      }
    })
  }

  return (
    <div ref={wrapperRef} className={`${intersected ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

IntObserverWrap.defaultProps = {
  threshold: .1,
  noState: false
}

export default IntObserverWrap;
