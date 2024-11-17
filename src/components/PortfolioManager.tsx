import React, { useEffect, useState } from 'react';
import { Box, Heading, Fade } from '@mui/material';
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
      <Box
        bgcolor="whiteAlpha.200"
        borderRadius="lg"
        p={6}
        mb={6}
      >
        <Heading size="xl" mb={4}>
          Portfolio Manager
        </Heading>
        <p>Total Supply: {totalSupply !== null ? totalSupply.toString() : 'Loading...'}</p>
        {/* Use portfolioId in the component as needed */}
        {/* Portfolio management UI elements with MUI */}
        {/* ...existing code... */}
      </Box>
    </Fade>
  );
}
