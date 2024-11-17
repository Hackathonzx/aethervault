import React, { useEffect, useState } from 'react';
import { chakra, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { connectWallet, getTotalSupply } from '../services/contractInteractions';

const MotionBox = chakra(motion.div);

interface PortfolioManagerProps {
  portfolioId: string | string[] | undefined;
}

export default function PortfolioManager({ portfolioId }: PortfolioManagerProps) {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        await connectWallet();
        const supply = await getTotalSupply();
        setTotalSupply(supply);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      bg="whiteAlpha.200"
      borderRadius="lg"
      p={6}
      mb={6}
    >
      <Heading size="xl" mb={4}>
        Portfolio Manager
      </Heading>
      <p>Total Supply: {totalSupply !== null ? totalSupply.toString() : 'Loading...'}</p>
      {/* Use portfolioId in the component as needed */}
      {/* Portfolio management UI elements with Chakra UI */}
      {/* ...existing code... */}
    </MotionBox>
  );
}
