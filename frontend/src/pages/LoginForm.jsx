import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
// import { toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        checkUser();
        // toast.info('Logged in');
        navigate('/startyourjourney');
      }
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-md rounded-xl shadow-xl shadow-gray-500">
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-semibold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="mb-2 block">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <button type="submit" className="rounded bg-blue-500 p-2 text-white">
            Login
          </button>
        </form>
        <p className="mt-4">
          Not registered yet?{' '}
          <Link to="/register" className="text-blue-500 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
