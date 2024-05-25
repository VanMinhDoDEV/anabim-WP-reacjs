import { useState, useEffect } from 'react';
import axios from 'axios';

function useCoursesAPI() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ourUsername = "key_37767e28b64e7068d2f44e692a97f3aa";
    const ourPassword = "secret_1797703cca9a2444a3b8e74c1a1e199fbaed7ab13dd64627510041923c73a108";
    const urlAPI = "http://localhost/anabim/server/wp-json/tutor/v1/courses/";

    setIsLoading(true);
    axios({
      method: 'get',
      url: urlAPI,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${ourUsername}:${ourPassword}`),      
      },
    })
      .then(response => {
        setData(response.data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setIsLoading(false); 
      });

  }, []);

  return { data, isLoading, error };
}

export default useCoursesAPI;