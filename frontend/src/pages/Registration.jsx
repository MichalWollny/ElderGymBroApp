import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import zxcvbn from 'zxcvbn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    weight: '',
    gender: '',
    fitnessLevel: '',
    workoutAim: '',
  });
  const [passwordScore, setPasswordScore] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (name === 'password') {
      const result = zxcvbn(value); // Calculate the password strength
      setPasswordScore(result.score); // Update the password score state
    }
  };

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
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }
    // Handle successful registration
    axios
      .post('http://localhost:8000/auth/register', formData)
      .then((response) => {
        console.log(response);
        alert('User successfully created!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error creating user:', error.message);
      });
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
      <Typography variant="h6">Registration Form</Typography>
      {/*Full-Name*/}
      <TextField
        required
        id="fullName"
        name="fullName"
        label="Full Name"
        type="text"
        variant="outlined"
        value={formData.fullName}
        onChange={handleChange}
      />
      {/*Username*/}
      <TextField
        required
        id="username"
        name="username"
        label="Username"
        type="text"
        variant="outlined"
        value={formData.username}
        onChange={handleChange}
      />
      {/*E-Mail*/}
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
        {/*Password*/}
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
      {/* confirmPassword*/}
      <TextField
        required
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {/* Age */}
      <TextField
        id="age"
        name="age"
        label="Age"
        type="number"
        variant="outlined"
        value={formData.age}
        onChange={handleChange}
      />
      {/* Weight */}
      <TextField
        id="weight"
        name="weight"
        label="Weight (kg)"
        type="number"
        variant="outlined"
        value={formData.weight}
        onChange={handleChange}
      />
      {/* Gender */}
      <TextField
        id="gender"
        name="gender"
        label="Gender"
        type="text"
        variant="outlined"
        value={formData.gender}
        onChange={handleChange}
      />
      {/* Fitness-Level */}
      <FormControl sx={{ width: '25ch' }}>
        <InputLabel id="fitness-level-label">Fitness Level</InputLabel>
        <Select
          labelId="fitness-level-label"
          id="fitnessLevel"
          name="fitnessLevel"
          value={formData.fitnessLevel}
          onChange={handleChange}>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
      {/* Workout Aim  */}
      <FormControl sx={{ width: '25ch' }}>
        <InputLabel id="workoutAim-label">Workout Aim</InputLabel>
        <Select
          labelId="workoutAim-label"
          id="workoutAim"
          name="workoutAim"
          value={formData.workoutAim}
          onChange={handleChange}>
          <MenuItem value="Power">Get Stronger (Unleash Cosmic Power)</MenuItem>
          <MenuItem value="Recomposition">Recomposition (Build Muscle, Sacrifice Fat)</MenuItem>
          <MenuItem value="Lose Weight">Lose Body Fat (Slim Down with Occult Forces)</MenuItem>
          <MenuItem value="Gain Muscle">Build Muscle (Terrifying Muscles of Doom)</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
    </Box>
  );
};

export default Registration;
