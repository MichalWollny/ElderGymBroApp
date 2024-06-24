import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    navigate('/startyourjourney');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-lg p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        <TextField label="Email" variant="outlined" fullWidth className="mb-4" />
        <TextField label="Password" type="password" variant="outlined" fullWidth className="mb-6" />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
