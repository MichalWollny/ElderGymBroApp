import { useState, useEffect, useDeferredValue } from 'react';
import { Link } from 'react-router-dom';
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

// TODO when in mobile view less space between the TextFields!

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [password, setPassword] = useState('');
  const result = usePasswordStrength(password);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/auth/register',
        {
          username,
          email,
          password,
        },
        { withCredentials: true },
      );

      if (response.status === 201) {
        toast.success('Successfully registered! Welcome');
        navigate('/login');
      }
    } catch (error) {
      // console.error(error);
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
        Sign Up
      </Typography>
      <form onSubmit={handleRegister}>
        <Grid container spacing={0}>
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
            <Button variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <p className="mt-2">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
};

export default SignUp;
