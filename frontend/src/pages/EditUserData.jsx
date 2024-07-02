import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuAppBar from '../assets/components/MenuAppBar';
import BottomAppBar from '../assets/components/BottomAppBar';
import { BottomNavigation } from '@mui/material';

function EditUserData() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    age: '',
    weight: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'gender' && value === '') {
      setFormData((prevState) => ({ ...prevState, gender: '' }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(' http://localhost:8000/profile/me/profileupdate', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
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
      <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Edit Profile
        </h1>
      </div>
      <div className="flex flex-row justify-center p-6">
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
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
            sx={{
              '& .MuiInputBase-input': {
                color: '141414', // text color
              },
              '& .MuiInputLabel-root': {
                color: '141414', // label color
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'teal', // border color
                backgroundColor: '141414',
              },
            }}
          />
          {/*Username*/}
          <TextField
            id="username"
            name="username"
            label="Username"
            type="text"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            sx={{
              '& .MuiInputBase-input': {
                color: '141414', // text color
              },
              '& .MuiInputLabel-root': {
                color: '141414', // label color
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'teal', // border color
                backgroundColor: '141414',
              },
            }}
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
            sx={{
              '& .MuiInputBase-input': {
                color: '141414', // text color
              },
              '& .MuiInputLabel-root': {
                color: '141414', // label color
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'teal', // border color
                backgroundColor: '141414',
              },
            }}
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
            sx={{
              '& .MuiInputBase-input': {
                color: '141414', // text color
              },
              '& .MuiInputLabel-root': {
                color: '141414', // label color
              },
              '& .MuiOutlinedInput-root': {
                borderColor: 'teal', // border color
                backgroundColor: '141414',
              },
            }}
          />

          {/* Gender */}
          <FormControl
            sx={{
              width: '25ch',
              '& .MuiInputBase-input': {
                color: '141414', // text color
              },
              '& .MuiInputLabel-root': {
                color: '141414', // label color
              },
              '& .MuiOutlinedInput-root': {
                borderColor: '141414', // border color
                backgroundColor: '141414',
              },
            }}>
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

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'teal', color: 'white' }}>
            Save
          </Button>
        </Box>

      </div>
    </div>
  );
}

export default EditUserData;
