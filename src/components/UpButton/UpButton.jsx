import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

export const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconButton
      w="40px"
      h="40px"
      color="white"
      bg="rgba(255, 165, 0, 0.6)"
      display={isVisible ? 'block' : 'none'}
      position="fixed"
      bottom="20px"
      right="20px"
      onClick={scrollToTop}
      _hover={{ bg: 'rgba(255, 165, 0, 0.9)' }}
    >
      <TriangleUpIcon />
    </IconButton>
  );
};
