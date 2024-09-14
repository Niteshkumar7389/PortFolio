import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", " Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      className="Special text-3xl font-bold text-customCyan"
      ref={typedRef}
    ></span>
  );
};

export default TypedText;
