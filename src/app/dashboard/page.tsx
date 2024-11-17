import { Box, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import EconomicDashboard from '@/components/EconomicDashboard';

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Market Overview</Typography>
              <Typography variant="body2" mb={2}>Get the latest market trends and insights.</Typography>
              <EconomicDashboard />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">View Details</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Portfolio Performance</Typography>
              <Typography variant="body2" mb={2}>Track the performance of your crypto portfolio.</Typography>
              {/* Include a graph or chart component here */}
              <Box
                component="img"
                src="/images/portfolio.png"
                alt="Portfolio Performance"
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  mb: 2,
                }}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">View Portfolio</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
