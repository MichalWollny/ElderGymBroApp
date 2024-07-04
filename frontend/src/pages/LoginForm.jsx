import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
// import { toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        checkUser();
        // toast.info('Logged in');
        navigate('/startyourjourney');
      }
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100svh', // Make the Container fill the entire viewport height
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'flex-start', // Align children to the start of the container
        '& .MuiTextField-root': {
          mb: 2, // Default margin bottom
          '@media (max-width:600px)': {
            mb: 1, // Reduced margin bottom for screens smaller than 600px
          },
        },
        '& .MuiButton-root': {
          mt: 3,
        },
      }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border p-2"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border p-2"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2, bgcolor: 'teal', color: 'white' }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <p className="mt-2 text-center text-xs text-slate-400">
        Not registered yet?{' '}
        <Link to="/register" className="text-teal-600 underline">
          Register here
        </Link>
      </p>
    </Container>
  );
}

export default LoginForm;

{
  /* <div className="container mx-auto mt-8 max-w-md rounded-xl shadow-xl shadow-gray-500">
  <div className="p-4">
    <h2 className="mb-4 text-2xl font-semibold">Login</h2>
    {error && <p className="mb-4 text-red-500">{error}</p>}
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="mb-2 block">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2, bgcolor: 'teal', color: 'white' }}>
        Login
      </Button>
    </form>
    <p className="mt-2 text-center text-xs text-slate-400">
      Not registered yet?{' '}
      <Link to="/register" className="text-teal-600 underline">
        Register here
      </Link>
    </p>
  </div>
</div>; */
}
