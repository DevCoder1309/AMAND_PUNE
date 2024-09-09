import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

function Success() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      navigate('/');
    }, 6000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={4000}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        Payment was successful! Please check your email for more details and the onboarding form.
      </Alert>
    </Snackbar>
  );
}

export default Success;
