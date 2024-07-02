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

// TODO when in mobile view less space between the TextFields!

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
        'http://localhost:8000/auth/register',
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
        Sign Up
      </Typography>
      <form onSubmit={handleRegister}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="username"
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
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
}

//   return (
//     <div className="whadow-gray-500 container mx-auto mt-8 max-w-md rounded-xl shadow-xl">
//       <div className="p-4">
//         <h2 className="mb-4 text-2xl font-semibold">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label className="mb-2 block">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full rounded border p-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="mb-2 block">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full rounded border p-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="mb-2 block">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full rounded border p-2"
//             />
//             {/* validation */}
//           </div>
//           <button type="submit" className="mt-2 rounded bg-blue-500 p-2 text-white">
//             Register
//           </button>
//         </form>
//         <p className="mt-2">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

export default RegisterForm;
