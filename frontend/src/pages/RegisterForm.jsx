import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
    <div className="whadow-gray-500 container mx-auto mt-8 max-w-md rounded-xl shadow-xl">
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-semibold">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="mb-2 block">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Email:</label>
            <input
              type="email"
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
            {/* validation */}
          </div>
          <button type="submit" className="mt-2 rounded bg-blue-500 p-2 text-white">
            Register
          </button>
        </form>
        <p className="mt-2">
          Already havean account?{' '}
          <Link to="/login" className="text-blue underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
