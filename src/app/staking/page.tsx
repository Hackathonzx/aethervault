import { Box, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import StakingPanel from '../../components/StakingPanel';

export default function StakingPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>Staking</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Stake Your Tokens</Typography>
              <Typography variant="body2" mb={2}>Earn rewards by staking your tokens in our secure platform.</Typography>
              <StakingPanel />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">Stake Now</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Staking Rewards</Typography>
              <Typography variant="body2" mb={2}>Check your staking rewards and performance.</Typography>
              {/* Include a graph or chart component here */}
              <Box
                component="img"
                src="/images/staking.png"
                alt="Staking Rewards"
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  mb: 2,
                }}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">View Rewards</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
