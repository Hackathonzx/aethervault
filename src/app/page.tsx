'use client';

import { Box, Typography, Button, Link, Container, Grid, Fade } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fade in={loaded}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={8}
      >
        <Box
          component="header"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">AETHERVAULT</Typography>
          <Box display="flex" gap={2}>
            <Link href="#" color="inherit">
              Docs
            </Link>
            <Button variant="contained" color="primary">Join Waitlist</Button>
            <Button variant="contained" color="primary">Launch Demo</Button>
          </Box>
        </Box>
        <Container component="main" sx={{ marginTop: 10 }} maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                EASY PLATFORM FOR TRADING{' '}
                <Box component="span" className="bg-gray-700 px-2 py-1 rounded-full">
                  Assets
                </Box>
              </Typography>
              <Typography variant="h2">AI-Powered DeFi Asset Management</Typography>
              <Typography variant="h6">
                Revolutionize how you manage your digital assets with Aethervault.
              </Typography>
              <Box display="flex" gap={2}>
                <Button variant="contained" color="primary">Launch Demo</Button>
                <Button variant="contained" color="primary">Join Waitlist</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className="bg-white rounded-lg p-4 mb-4"
              >
                {/* Include cards and graphs using MUI components */}
                {/* ...existing code... */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
}
