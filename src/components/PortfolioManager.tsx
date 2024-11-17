import React, { useEffect, useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { connectWallet, getTotalSupply } from '../services/contractInteractions';

interface PortfolioManagerProps {
  portfolioId: string | string[] | undefined;
}

export default function PortfolioManager({ }: PortfolioManagerProps) {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await connectWallet();
        const supply = await getTotalSupply();
        setTotalSupply(supply);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Fade in={loaded}>
      <Box className="bg-gradient bg-opacity-20 rounded-lg p-6 mb-6">
        <Typography variant="h4" className="mb-4">
          Portfolio Manager
        </Typography>
        <p>Total Supply: {totalSupply !== null ? totalSupply.toString() : 'Loading...'}</p>
        {/* Use portfolioId in the component as needed */}
        {/* Portfolio management UI elements with Material UI */}
        {/* ...existing code... */}
      </Box>
    </Fade>
  );
}
