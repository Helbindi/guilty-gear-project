import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

    const style = {
      backgroundColor: 'red',
      color: 'black',
      width: '50px',
      height: '50px',
      borderRadius: '25px'
  }

  return (
    <div className="back-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <FaArrowAltCircleUp style={style} />
        </div>}
    </div>
  );
}