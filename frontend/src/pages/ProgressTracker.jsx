import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress, Container, Select, MenuItem } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// Image
import cthuluprogress from '../assets/images/ProgressTracking.png';

const ProgressTracker = ({ userId }) => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState('');

  useEffect(() => {
    const fetchMockProgress = async () => {
      try {
        // Simulated data
        const mockData = [
          { date: '01.03.2024', exercise: 'Squat', weight: 55 },
          { date: '15.03.2024', exercise: 'Squat', weight: 62 },
          { date: '23.03.2024', exercise: 'Squat', weight: 74 },
          { date: '01.03.2024', exercise: 'Bench Press', weight: 40 },
          { date: '15.03.2024', exercise: 'Bench Press', weight: 45 },
          { date: '20.03.2024', exercise: 'Bench Press', weight: 72 },
          { date: '01.04.2024', exercise: 'Bench Press', weight: 85 },
          { date: '17.04.2024', exercise: 'Bench Press', weight: 50 },
          { date: '01.03.2024', exercise: 'Deadlift', weight: 80 },
          { date: '20.03.2024', exercise: 'Deadlift', weight: 50 },
          { date: '01.03.2024', exercise: 'LatPullDown', weight: 45 },
          { date: '15.03.2024', exercise: 'LatPullDown', weight: 72.5 },
        ];
        setProgress(mockData);
        setSelectedExercise(mockData[0].exercise); // Set initial selected exercise
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMockProgress();
  }, [userId]);

  if (loading) return <CircularProgress />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const exercises = [...new Set(progress.map((entry) => entry.exercise))];
  const exerciseData = progress.filter((entry) => entry.exercise === selectedExercise);
  const data = {
    labels: exerciseData.map((entry) => entry.date),
    datasets: [
      {
        label: `${selectedExercise} Weight increase (kg)`,
        data: exerciseData.map((entry) => entry.weight),
        borderColor: 'rgba(94, 234, 212, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff', // Light color for y-axis
        },
        grid: {
          color: '#374151', // Grid color for y-axis
        },
      },
      x: {
        ticks: {
          color: '#ffffff', // Light color for x-axis
        },
        grid: {
          color: '#374151', // Grid color for x-axis
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Light color for legend
        },
      },
    },
  };

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-br from-black to-blue-950 pt-20">
      <div className="flex flex-row justify-center">
        <h2 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:py-4 md:pt-8 md:text-4xl">
          Training Progress
        </h2>
      </div>
      <div className="mx-auto mb-6 mt-2 flex justify-center">
        <img
          src={cthuluprogress}
          alt="Cthulhu Progress"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
      <Container className="h-full">
        <Select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="mb-6 w-full"
          sx={{ color: '#db2777', borderColor: '#ff0000' }}>
          {exercises.map((exercise) => (
            <MenuItem key={exercise} value={exercise} sx={{ color: '#14b8a6' }}>
              {exercise}
            </MenuItem>
          ))}
        </Select>
        <div className="mt-6">
          <Line data={data} options={options} />
        </div>
      </Container>
    </div>
  );
};

export default ProgressTracker;
