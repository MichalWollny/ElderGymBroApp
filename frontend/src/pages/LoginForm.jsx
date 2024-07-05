import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/useAuth';
import { Container, TextField, Button, Grid, InputAdornment, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// colors for the background gradient
const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  // Handle Login
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
        toast.success('🏆 Successfully logged in! Welcome mortal');
        navigate('/startyourjourney');
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  //HandleClickShowPassword
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        backgroundImage: 'url(your-background-image-url)',
        backgroundSize: 'cover',
      }}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
      <motion.section
        style={{
          backgroundImage,
          zIndex: -99,
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
          <h2 className="my-8 max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-6xl">
            Login
          </h2>
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
                  fullWidth
                  required
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="new-password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
                <p className="mt-2 text-center text-xs text-slate-400">
                  Not registered yet?{' '}
                  <Link to="/register" className="text-teal-600 underline">
                    Register here
                  </Link>
                </p>
                <div className="mt-2 text-center text-xs">
                  <Link to="/forgotpassword" className="text-teal-600 underline">
                    Forgot Password?
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </Container>
      </motion.section>
    </div>
  );
}

export default LoginForm;
