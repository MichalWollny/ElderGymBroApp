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
import { Link } from 'react-router-dom';

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
    fitnesLevel: '',
    workoutAim: '',
  });
  const [passwordScore, setPasswordScore] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'gender' && value === '') {
      setFormData((prevFormData) => ({ ...prevFormData, gender: '' }));
    } else if (name === 'fitnesLevel' && value === '') {
      setFormData((prevFormData) => ({ ...prevFormData, fitnesLevel: '' }));
    } else if (name === 'workoutAim' && value === '') {
      setFormData((prevFormData) => ({ ...prevFormData, workoutAim: '' }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

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
        alert(`Error creating user: ${error.message}`);
      });
  };

  return (
    <div className="min-h-svh bg-gray-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start bg-gray-900">
        {/* icon button container*/}
        <div className="flex flex-row">
          {/* link container*/}
          <div className="flex flex-row justify-center text-teal-100">
            <a href="/" className="m-2 font-semibold text-teal-600">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h1 className="bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-teal-600 sm:text-3xl md:text-4xl">
          -- Registration Form --
        </h1>
      </div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col items-center">
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
        <FormControl sx={{ width: '25ch' }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select labelId="gender-label" id="Gender" name="gender" value={formData.gender} onChange={handleChange}>
            <MenuItem value="">-- Clear Field --</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="elder thing">Elder Thing</MenuItem>
            <MenuItem value="blob">Blob</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        {/* Fitness-Level */}
        <FormControl sx={{ width: '25ch' }}>
          <InputLabel id="fitnes-level-label">Fitness Level</InputLabel>
          <Select
            labelId="fitness-level-label"
            id="fitnesLevel"
            name="fitnesLevel"
            value={formData.fitnesLevel}
            onChange={handleChange}>
            <MenuItem value="">-- Clear Field --</MenuItem>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
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
            <MenuItem value="">-- Clear Field --</MenuItem>
            <MenuItem value="Muscle Worship">Get Stronger (Unleash Cosmic Power)</MenuItem>
            <MenuItem value="Fat Fight">Recomposition (Build Muscle, Sacrifice Fat)</MenuItem>
            <MenuItem value="Stamina Destruction">Lose Body Fat (Slim Down with Occult Forces)</MenuItem>
            <MenuItem value="Cardio Crusade">Build Muscle (Terrifying Muscles of Doom)</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
        <p className="text-xs text-gray-400">
          Already have an Account?{' '}
          <span className="text-xs text-teal-700">
            <Link to="/signup">Login here</Link>
          </span>
        </p>
      </Box>
    </div>
  );
};

export default Registration;
