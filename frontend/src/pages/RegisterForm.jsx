import axios from 'axios';
import { useState, useEffect, useDeferredValue } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Alert,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import { zxcvbnAsync, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import * as zxcvbnDePackage from '@zxcvbn-ts/language-de';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

  // when the form is submitted, send a POST request to the server
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
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
        toast.success('Successfully registered! Welcome');
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response.data.error || 'Registration failed');
    }
  };

  return (
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
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
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
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2, bgcolor: 'teal', color: 'white' }}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <p className="mt-2 text-center text-xs text-slate-400">
        Already have an account?{' '}
        <Link to="/login" className="text-teal-600 underline">
          Login
        </Link>
      </p>
    </Container>
  );
}

export default RegisterForm;
