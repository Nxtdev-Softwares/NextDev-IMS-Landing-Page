import React from 'react';
import { useEffect, useState, useRef } from "react";

function MainTopics(props) {

  const ref = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        obs.disconnect();
      }
    }, { threshold: 0.5 });

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

    return (
        <>
        <h3 ref={ref} className={`main-topic ${animate ? `animate` : ""}`}>{props.heading}</h3>
        </>
    );
}
export default MainTopics;
