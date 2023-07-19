//* RN IMPORTS //
import { useState, useEffect } from 'react';

//* AXIOS IMPORT //
import axios from 'axios';

//* DATA FETCH HOOK //
const useFetch = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await axios.get('http://192.168.0.187:5000/api/v1/products/')
      setData(response.data)
      setLoading(false)

    } catch (error) {
      setError(error)
      console.log('Error Occurred:', error)

    } finally {
      setLoading(false)

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setLoading(true);
    fetchData();
  };

  return {
    data, loading, error, reFetch
  }
};

export default useFetch;
