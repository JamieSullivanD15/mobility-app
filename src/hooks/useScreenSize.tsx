import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (window.innerWidth < 480) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return {
    isMobile,
    isTablet,
  };
};

export default useScreenSize;
