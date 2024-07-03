import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData() {
  const [hardcodedWorkouts, setHardcodedWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/hardcodedworkouts`);
        setHardcodedWorkouts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { hardcodedWorkouts, isLoading };
}

export default useFetchData;
