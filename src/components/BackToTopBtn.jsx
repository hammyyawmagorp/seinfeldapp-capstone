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
  return (
    <div className="back-to-top-btn">
      {backToTopButton && (
        <button onClick={scrollUp}>
          Back to Top<br></br>^
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
