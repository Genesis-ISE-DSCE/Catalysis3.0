import { useState, useEffect } from 'react';

function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currScrollY = window.scrollY;
      setIsScrollingUp(currScrollY < lastScrollY);
      setScrollY(currScrollY);
      lastScrollY = currScrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isScrollingUp, scrollY };
}

export { useScrollAnimation };
