import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {Tilt} from 'react-tilt';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Theme with darker green and white contrast
const theme = createTheme({
  palette: {
    primary: {
      main: '#1b5e20', // Darker green
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#1b5e20', // Darker green for text
    },
  },
});

// Styled components for smooth transitions
const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'transform 0.3s, background-color 0.3s',
  '&:hover': {
    transform: 'scale(1.1) translateZ(10px)',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'scale(1.05) translateZ(20px)',
  },
}));

export default function Home() {
  const navigate = useNavigate();

  const handleMembership = () => {
    navigate('/donate');  
  };

  const handleLogin = () => {
    navigate('/Login')
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Association of Manipuri Diaspora
          </Typography>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Events & Activities</Button>
          <Button color="inherit">Publications</Button>
          <Button color="inherit">In the News</Button>
          <Button color="inherit" onClick={handleMembership}>Membership</Button>
          <Button color="inherit">Reach Us</Button>
          <Button color="inherit" onClick={handleLogin}>Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to Our Organization</h1>
        <p style={{ fontSize: '18px', color: theme.palette.text.primary }}>
          Join us in making an impact through our events, publications, and community!
        </p>

        <Grid container spacing={4} justifyContent="center" mt={4}>
          {['About Us', 'Events & Activities', 'Publications', 'In the News', 'Membership', 'Reach Us'].map((field, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
                <StyledBox>
                  <StyledButton
                    variant="contained"
                    fullWidth
                    color={field === 'Membership' ? 'secondary' : 'primary'}
                    onClick={field === 'Membership' ? handleMembership : null}
                  >
                    {field}
                  </StyledButton>
                </StyledBox>
              </Tilt>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
