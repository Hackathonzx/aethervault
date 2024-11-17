import React from 'react';
import { Button, Box } from '@chakra-ui/react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <Button colorScheme="yellow" onClick={onClick}>
      {children}
    </Button>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
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
