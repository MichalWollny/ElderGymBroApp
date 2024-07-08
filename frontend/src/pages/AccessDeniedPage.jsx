import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Button } from '@mui/material';
import accessDeniedImage from '../assets/images/access-denied.jpg';

function AccessDeniedPage() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        flexDirection: 'column',
      }}>
      <img src={accessDeniedImage} alt="Access Denied" className="mb-8 rounded-full" />

      <Button
        variant="contained"
        color="primary"
        onClick={handleLoginRedirect}
        style={{ marginTop: '1rem', textTransform: 'none' }}>
        Login first
      </Button>

      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  );
}

export default AccessDeniedPage;
