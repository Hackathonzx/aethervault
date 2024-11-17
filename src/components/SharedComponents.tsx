import React from 'react';
import { Button, Box } from '@mui/material';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <Box className="bg-gradient bg-opacity-20 rounded-lg p-6 mb-6 backdrop-blur-lg">
      {children}
    </Box>
  );
}

// ...existing code...
