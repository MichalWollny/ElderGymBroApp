import { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import cthulupassword from '../assets/images/cthulupassword.png';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const { isLoggedIn, checkUser } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

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

  //Regex ist eine Email validierung die checkt ob wirklich eine E-mail eingetragen wurde.
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage('Please enter a valid email address');
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email adress');
      return;
    }
    setMessage('Please check your email inbox for the password reset link');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
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
      <div className="mt-2 flex flex-row justify-center">
        <h1 className="p-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-teal-800 sm:text-3xl md:text-4xl">
          Forgot Password{' '}
        </h1>
      </div>
      <div className="mt-6 flex flex-col place-items-center text-center">
        <p className="font-cthulhumbus text-xl md:text-4xl">Forgot Password?</p>
        <img src={cthulupassword} alt="Cthulu Forgot Password" className="mt-4 size-72" />
        <p className="mt-4 text-xs font-light tracking-wide text-slate-400">
          No problem! Please enter your e-mail address to receive a <br /> link to reset your password. Follow the
          instructions in the <br /> email to create a new password.
        </p>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter your email address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, bgcolor: 'teal', color: 'white' }}>
            Send Reset Link
          </Button>
        </Box>
        {/* Nachricht an den Nutzer nach dem Submitten */}
        {message && <p className="mt-2 text-xs font-light tracking-wide text-yellow-400">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
