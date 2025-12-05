import { useEffect, useRef, useState } from "react";

const Zoom_in = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0  ${
        show ? "zoom-in" : ""
      } transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Zoom_in;
