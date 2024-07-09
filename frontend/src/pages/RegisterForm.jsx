import axios from 'axios';
import { useState, useEffect, useDeferredValue, useMemo } from 'react';
import {
  Backdrop,
  Typography,
  Container,
  TextField,
  Button,
  LinearProgress,
  Alert,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { zxcvbnAsync, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import * as zxcvbnDePackage from '@zxcvbn-ts/language-de';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

import { useAuth } from '../context/AuthProvider';

// Configure zxcvbn-ts
const matcherPwned = matcherPwnedFactory(fetch, zxcvbnOptions);
zxcvbnOptions.addMatcher('pwned', matcherPwned);

const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
    ...zxcvbnDePackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  useLevenshteinDistance: true,
  translations: zxcvbnEnPackage.translations,
};
zxcvbnOptions.setOptions(options);

const usePasswordStrength = (password) => {
  const [result, setResult] = useState(null);
  const deferredPassword = useDeferredValue(password);

  useEffect(() => {
    zxcvbnAsync(deferredPassword).then((response) => setResult(response));
  }, [deferredPassword]);

  return result;
};

const getPasswordStrengthColor = (score) => {
  switch (score) {
    case 0:
    case 1:
      return 'error'; // Red
    case 2:
      return 'warning'; // Yellow
    case 3:
      return 'info'; // Light blue
    case 4:
      return 'success'; // Green
    default:
      return 'grey';
  }
};

function RegisterForm() {
  const { isLoggedIn, checkUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const result = usePasswordStrength(password);

  useEffect(() => {
    const fetchUserData = async () => {
      await checkUser();
    };
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  // when typing into the input fields, update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // this is needed to update the password state for the password strength meter
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // colors for the background gradient
  const COLORS_TOP = useMemo(() => ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'], []);

  // Function to initiate navigation to /login with a delay
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const naviToLogin = () => {
    setOpenBackdrop(true);

    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  };

  const handleBackdropClick = () => {
    setOpenBackdrop(false);
    navigate('/login');
  };

  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Step 0: Check if formData.email is a valid email address
    if (!emailRegex.test(formData.email)) {
      toast.error('🙅‍♂ Please enter a valid email address.');
      return; // Stop the function from proceeding further
    }

    // Step 1: Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('🙅‍♂ Passwords do not match.');
      return; // Stop the function from proceeding further
    }
    // Step 2: Check if 'passwordStrength' indicates a strength of 3, or 4 (out of 4)
    if (result.score !== 3 && result.score !== 4) {
      toast.error('🙅‍♂ We do not approve your weak password!');
      return; // Stop the function from proceeding further
    }

    // Proceed with the registration process
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },
      );

      if (response.status === 201) {
        toast.success('🫱🏼‍🫲🏾 Welcome new member of the cult!');
        naviToLogin();
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color, COLORS_TOP]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

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
            // bgcolor: 'background.default',
            // color: 'text.primary',

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
            Register
          </h2>
          <form onSubmit={handleRegister}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Username"
                  autoComplete="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  autoComplete="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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
                {result && (
                  <>
                    <LinearProgress
                      variant="determinate"
                      value={result.score * 25}
                      color={getPasswordStrengthColor(result.score)}
                      sx={{ borderRadius: 4 }}
                    />
                    {result.feedback.warning && <Alert severity="warning">{result.feedback.warning}</Alert>}
                    {result.feedback.suggestions.length > 0 &&
                      result.feedback.suggestions.map((suggestion, index) => (
                        <Alert key={index} severity="info">
                          {suggestion}
                        </Alert>
                      ))}
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Confirm Password"
                  autoComplete="new-password"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  sx={{ mt: 1.2 }}
                  variant="outlined"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                  Register
                </Button>
                <p className="mt-2 text-center text-xs text-slate-400">
                  Already have an account?{' '}
                  <Link to="/login" className="text-teal-600 underline">
                    Login
                  </Link>
                </p>
              </Grid>
            </Grid>
          </form>
          <Backdrop sx={{ color: '#fff', zIndex: 99 }} open={openBackdrop} onClick={handleBackdropClick}>
            <div style={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                component="div"
                className="mx-14 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus font-bold">
                You are now part of the cult. <br /> Continue by logging in.
              </Typography>
              <CircularProgress color="success" sx={{ marginTop: 2, size: 100 }} />
            </div>
          </Backdrop>
        </Container>
      </motion.section>
    </div>
  );
}

export default RegisterForm;
