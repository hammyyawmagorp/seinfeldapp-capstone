import React from "react";
import { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [backToTopButton, setBackToTopButton] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else setBackToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="back-to-top-btn">
      {backToTopButton && (
        <button
          style={{
            borderRadius: "15px",
            backgroundColor: isHovering ? "#e72b21" : "rgb(128, 17, 26, 0.5)",
            color: isHovering ? "#dadae0" : "black",
            position: "fixed",
            cursor: "pointer",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={scrollUp}
        >
          ⬆<br></br>Back to <br></br>Top of Page
          <br></br>
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
