import { useState, useEffect, useDeferredValue } from 'react';
import { Container, Typography, TextField, Button, Grid, LinearProgress, Box, Alert } from '@mui/material';
import { zxcvbnAsync, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import * as zxcvbnDePackage from '@zxcvbn-ts/language-de';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';

// Configure zxcvbn
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [password, setPassword] = useState('');
  const result = usePasswordStrength(password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4} sx={{ '& .MuiTextField-root': { mb: 2 }, '& .MuiButton-root': { mt: 3 } }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
