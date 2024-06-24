import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import zxcvbn from 'zxcvbn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const LoginForm = () => {
  const [passwordScore, setPasswordScore] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'password') {
      const result = zxcvbn(value); // Calculate the password strength
      setPasswordScore(result.score); // Update the password score state
    }
  };

  // Function to determine the color of the strength bar based on the score
  const getPasswordStrengthColor = (score) => {
    switch (score) {
      case 0:
        return 'error'; // Red
      case 1:
        return 'warning'; // Orange
      case 2:
        return 'info'; // Light blue
      case 3:
        return 'primary'; // Blue
      case 4:
        return 'success'; // Green
      default:
        return 'default'; // Grey
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO:  Submit form logic will come here
    console.log('Form submitted', formData);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col items-center">
      <Typography variant="h6">Login Form</Typography>
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <div>
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <Box sx={{ width: '92%', mx: 'auto' }}>
          <LinearProgress
            variant="determinate"
            value={(passwordScore / 4) * 100}
            color={getPasswordStrengthColor(passwordScore)}
            sx={{ borderRadius: 4 }}
          />
        </Box>
      </div>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;
