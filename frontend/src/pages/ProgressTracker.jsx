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

//Image
import cthuluprogress from '../assets/images/ProgressTracking.png';

const ProgressTracker = ({ userId }) => {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState('');

  useEffect(() => {
    const fetchMockProgress = async () => {
      try {
        // Simulierte Daten
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
        setSelectedExercise(mockData[0].exercise); // Ausgewählte Anfangsübung einstellen
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
          color: '#ffffff', // Helle Farbe für die y-Achse
        },
        grid: {
          color: '#374151', // Rasterfarbe für die y-Achse
        },
      },
      x: {
        ticks: {
          color: '#ffffff', // Helle Farbe für die x-Achse
        },
        grid: {
          color: '#374151', // Rasterfarbe für die x-Achse
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Helle Farbe für die Legende
        },
      },
    },
  };

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-br from-black to-blue-950 pt-20">
      <div className="flex flex-row justify-center from-black to-blue-950">
        <h2 className="py-2 sm:py-4 md:pt-8 cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent md:text-4xl">
          Training progress{' '}
        </h2>
      </div>
      <div className="mx-auto mb-6 mt-2 flex size-5/6 items-center justify-center">
        <img src={cthuluprogress} alt="cthulu-progress" />
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
        <div>
          {/* <Typography variant="h5" sx={{ color: '#14b8a6' }}>
            {selectedExercise}
          </Typography> */}
          <Line data={data} options={options} />
        </div>
      </Container>
    </div>
  );
};

export default ProgressTracker;
