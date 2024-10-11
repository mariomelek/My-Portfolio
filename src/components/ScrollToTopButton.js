// // ScrollToTopButton.js
// import React, { useState, useEffect } from 'react';
// import './ScrollToTopStyles.css'; // Optional CSS for styling the button

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down 300px
//   const checkScrollTop = () => {
//     if (!isVisible && window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else if (isVisible && window.pageYOffset <= 300) {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', checkScrollTop);
//     return () => {
//       window.removeEventListener('scroll', checkScrollTop);
//     };
//   }, [isVisible]);

//   return (
//     <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
//       ↑
//     </div>
//   );
// };

// export default ScrollToTopButton;











// ScrollToTopButton.js
import React, { useState, useEffect, useRef } from 'react';
import './ScrollToTopStyles.css'; // Optional CSS for styling the button

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(isVisible); // Create a ref to keep track of isVisible

  // Update the ref whenever isVisible changes
  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  // Show button when page is scrolled down 300px
  const checkScrollTop = () => {
    if (!isVisibleRef.current && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisibleRef.current && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []); // Leave dependency array empty

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default ScrollToTopButton;
