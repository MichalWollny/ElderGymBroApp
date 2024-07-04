import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
// import { toast } from 'react-toastify';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

// colors for the background gradient
const COLORS_TOP = useMemo(() => ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'], []);

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();
  // for the background gradient
  const color = useMotionValue(COLORS_TOP[0]);

  const navigate = useNavigate();

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color, COLORS_TOP]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

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
    <motion.section
      style={{
        backgroundImage,
      }}>
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2, bgcolor: 'teal', color: 'white' }}>
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
        <div className="absolute inset-0 z-[-1]">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </Container>
    </motion.section>
  );
}

export default LoginForm;
