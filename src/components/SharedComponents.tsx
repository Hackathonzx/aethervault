import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export function PrimaryButton({ children, onClick }) {
  return (
    <Button colorScheme="yellow" onClick={onClick}>
      {children}
    </Button>
  );
}

export function Card({ children }) {
  return (
    <Box
      bg="whiteAlpha.200"
      borderRadius="lg"
      p={6}
      mb={6}
      backdropFilter="blur(10px)"
    >
      {children}
    </Box>
  );
}

// ...existing code...
