'use client';

import { Box, Typography, Button, Container, Grid, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { connectWallet } from '../services/contractInteractions';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      alert('Wallet connected successfully!');
    } catch (error) {
      alert('Failed to connect wallet.');
      console.error(error);
    }
  };

  return (
    <Fade in={loaded}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        className="bg-gradient"
        sx={{
          background: 'linear-gradient(135deg, #ff7e5f 0%, #6a3093 100%)',
          color: 'white',
        }}
      >
        <header>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
            px={2}
            py={2}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="h4" fontWeight="bold">AETHERVAULT</Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              <Button variant="contained" color="secondary" onClick={() => router.push('/dashboard')}>Launch Demo</Button>
              <Button variant="contained" color="secondary" onClick={() => router.push('/staking')}>Staking</Button>
              {/* <Button variant="contained" color="secondary" onClick={() => router.push('/portfolio')}>Portfolio</Button> */}
              <Button variant="contained" color="secondary" onClick={handleConnectWallet}>Connect Wallet</Button>
            </Box>
          </Box>
        </header>
        <Container component="main" sx={{ marginTop: 10 }} maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" mb={2}>
                EASY PLATFORM FOR TRADING{' '}
                <Box component="span" className="bg-gray-700 px-2 py-1 rounded-full">
                  Assets
                </Box>
              </Typography>
              <Typography variant="h2" fontWeight="bold" mb={2}>AI-Powered DeFi Asset Management</Typography>
              <Typography variant="h6" mb={4}>
                Revolutionize how you manage your digital assets with Aethervault.
              </Typography>
              <Box display="flex" gap={2} flexWrap="wrap">
                <Button variant="contained" color="secondary" onClick={() => router.push('/dashboard')}>Launch Demo</Button>
                <Button variant="contained" color="secondary" onClick={() => router.push('/staking')}>Staking</Button>
                {/* <Button variant="contained" color="secondary" onClick={() => router.push('/portfolio')}>Portfolio</Button> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className="bg-white rounded-lg p-4 mb-4"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Include cards and graphs using MUI components */}
                {/* Slot for images */}
                <Box
                  component="img"
                  src="/images/aethervault.png"
                  alt="Financial graph"
                  sx={{
                    width: '100%',
                    borderRadius: '8px',
                    mb: 2,
                  }}
                />
                {/* ...existing code... */}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <footer>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={2}
            mt={4}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body2" color="inherit">
              © 2024 Aethervault. All rights reserved.
            </Typography>
          </Box>
        </footer>
      </Box>
    </Fade>
  );
}
